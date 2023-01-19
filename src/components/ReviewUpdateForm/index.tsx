import api from '@/Api/api';

import { CategoryType, ReviewFormData } from '@/types';

import { useCallback, useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

import Button from '@/components/ReviewCreateForm/Button';
import ErrorMessage from '@/components/ReviewCreateForm/ErrorMessage';
import RegisterInput from '@/components/ReviewCreateForm/RegisterInput';
import RegisterTextarea from '@/components/ReviewCreateForm/RegisterTextarea';
import { InformCancelModal, InformCreateLoadingModal } from '@/components/Modal';
import { toast } from 'react-toastify';
import { REVIEW_UPDATE } from '../Toast/ToastText';

const ReviewUpdateForm = ({
  categoryData,
}: {
  categoryData: Readonly<CategoryType[]>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewFormData>();

  const {
    state: { postId, channel, title },
  } = useLocation();

  const review = useMemo(() => JSON.parse(title), []);

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
    formData.append('postId', postId);
    formData.append('title', JSON.stringify(titleAndContent));
    formData.append('image', image);
    formData.append('channelId', id);

    try {
      await api.put('/posts/update', formData, {
        headers: {
          Authorization: `bearer ${localStorage.getItem('login-token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate(`/category/${name}`, { state: { id, name }, replace: true });
      toast.success(REVIEW_UPDATE);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center text-TEXT_BASE_BLACK">
        <div className="flex flex-col w-5/12 max-md:w-9/12">
          <h1 className="text-xl pb-2.5 self-start">리뷰 수정</h1>
          <form className="flex flex-col">
            <RegisterInput
              type="text"
              placeholder="제목"
              style={{
                container: 'mb-4 flex flex-col',
                input: 'input w-full bg-GRAY_100',
              }}
              value={review.title}
              register={register}
              registerName="title"
              registerRules={{ required: '제목을 입력해 주세요.' }}
              errors={errors.title}
            />
            <RegisterTextarea
              rows={10}
              placeholder="사용후기를 남겨주세요"
              style={{
                container: 'flex flex-col mb-4',
                textarea: 'textarea bg-GRAY_100 text-sm',
              }}
              value={review.contents}
              register={register}
              registerName="contents"
              registerRules={{ required: '내용을 입력해 주세요.' }}
              errors={errors.contents}
            />
            <RegisterInput
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
            <fieldset className="flex flex-wrap ">
              {categoryData.map(({ id, name }) => {
                return (
                  <label
                    key={id}
                    className="flex mr-4 rounded-xl cursor-pointer hover:text-[#BE3555]"
                    htmlFor={channel.name}
                  >
                    <RegisterInput
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
              {errors.category && <ErrorMessage errors={errors.category} />}
            </fieldset>
            <div className="action-buttons flex gap-4">
              <Button
                name="취소"
                style="bg-GRAY_200 p-2.5 flex-1 rounded-xl hover:bg-slate-300"
                clickHandler={onClickCancelButton}
              />
              <Button
                name="리뷰 수정하기"
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

export default ReviewUpdateForm;
