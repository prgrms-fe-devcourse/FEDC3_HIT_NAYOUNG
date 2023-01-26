import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { CategoryType, ReviewFormData } from '@/types';

import api from '@/Api/api';

import { getLocalStorage } from '@/utils/storage';
import { REVIEW_CRAETE } from '@/components/Toast/ToastText';
import { InformCancelModal, InformCreateLoadingModal } from '@/components/Modal';
import Button from '@/components/ReviewCreateForm/Button';

import FormInput from '@/components/common/ReactHookForm/FormInput';
import FormTextarea from '@/components/common/ReactHookForm/FormTextarea';
import WarningLabel from '@/components/Auth/WarningLabel';

// FIXME: 비동기 로직, 컴포넌트랑 분리

const ReviewCreateForm = ({
  categoryData,
}: {
  categoryData: Readonly<CategoryType[]>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewFormData>();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isOpenCancelModal, setIsOpenCancelModal] = useState(false);

  const onClickCancelButton = useCallback(() => {
    setIsOpenCancelModal(true);
  }, []);

  const onOffCancelModal = useCallback(() => {
    setIsOpenCancelModal(false);
  }, []);

  const onSubmitReview: SubmitHandler<ReviewFormData> = async ({
    title,
    contents,
    image,
    category,
  }) => {
    setLoading(true);
    const titleAndContent = {
      title,
      contents,
    };

    // 리뷰작성할 카테고리 data(id,name) 찾기
    const { id, name } = categoryData
      .filter(({ name }) => name === category)
      .pop() as CategoryType;

    const formData = new FormData();
    formData.append('title', JSON.stringify(titleAndContent));
    formData.append('image', image[0]);
    formData.append('channelId', id);

    try {
      await api.post('/posts/create', formData, {
        headers: {
          Authorization: `bearer ${getLocalStorage('login-token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate(`/category/${name}`, { state: { id, name }, replace: true });
      toast.success(REVIEW_CRAETE);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <div className="flex flex-col max-w-2xl mx-auto my-0 px-8">
          <h1 className="text-xl pb-2.5 self-start">리뷰 작성</h1>
          <form className="flex flex-col">
            <FormInput<ReviewFormData>
              type="text"
              placeholder="제목"
              style={{
                container: 'mb-4 flex flex-col',
                input: 'input w-full bg-GRAY_100',
              }}
              register={register}
              registerName="title"
              registerRules={{ required: '제목을 입력해 주세요.' }}
              errors={errors.title}
            />
            <FormTextarea<ReviewFormData>
              rows={20}
              placeholder="사용후기를 남겨주세요."
              style={{
                container: 'flex flex-col mb-4',
                textarea: 'textarea bg-GRAY_100 text-sm',
              }}
              register={register}
              registerName="contents"
              registerRules={{ required: '내용을 입력해 주세요.' }}
              errors={errors.contents}
            />
            <FormInput<ReviewFormData>
              type="file"
              style={{
                container: 'flex flex-col mb-4',
              }}
              accept="image/*"
              register={register}
              registerName="image"
              registerRules={{ required: '1장의 이미지를 올려주세요.' }}
              errors={errors.image}
            />
            <h2 className="text-lg pb-2.5 self-start font-bold">작성할 카테고리</h2>
            <fieldset className="flex flex-wrap justify-start flex-col pb-8 md:justify-around md:flex-row">
              {categoryData.map(({ id, name }) => {
                return (
                  <label
                    key={id}
                    className="flex mr-4 rounded-xl cursor-pointer hover:text-[#BE3555]"
                    htmlFor={name}
                  >
                    <FormInput<ReviewFormData>
                      id={name}
                      type="radio"
                      style={{
                        container: 'mr-[3px]',
                        input: 'radio radio-error',
                      }}
                      value={name}
                      register={register}
                      registerName="category"
                      registerRules={{ required: '카테고리를 골라주세요.' }}
                    />
                    {name}
                  </label>
                );
              })}
              {errors.category && <WarningLabel message={errors.category.message} />}
            </fieldset>
            <div className="action-buttons flex gap-4">
              <Button
                name="취소"
                style="bg-GRAY_200 p-2.5 flex-1 rounded-xl hover:bg-slate-300"
                clickHandler={onClickCancelButton}
              />
              <Button
                name="리뷰남기기"
                style="bg-BASE p-2.5 flex-1 rounded-xl hover:bg-HOVER"
                clickHandler={handleSubmit(onSubmitReview)}
              />
            </div>
          </form>
        </div>
      </div>
      <InformCancelModal isOpen={isOpenCancelModal} modalOffHandler={onOffCancelModal} />
      <InformCreateLoadingModal isOpen={loading} />
    </>
  );
};

export default ReviewCreateForm;
