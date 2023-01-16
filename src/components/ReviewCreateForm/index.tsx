import api from '@/Api/api';
import RegisterInput from '@/components/ReviewCreateForm/RegisterInput';
import { ReviewFormData } from '@/types';
import RegisterTextarea from '@/components/ReviewCreateForm/RegisterTextarea';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '@/components/ReviewCreateForm/Button';
import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import InformCreateLoadingModal from '@/components/ReviewCreateForm/InformCreateLoadingModal';
import InformCancelModal from '@/components/ReviewCreateForm/InformCancelModal';
import ErrorMessage from '@/components/ReviewCreateForm/ErrorMessage';

// FIXME: 비동기 로직, 컴포넌트랑 분리

const Dummy_Channel = {
  오디오: '63bd141d93836272216d324a',
  노트북: '63bd045193836272216d31bc',
  키보드: '63bd140193836272216d323e',
  휴대폰: '63bd140b93836272216d3242',
  모니터: '63bd141693836272216d3246',
  시계: '63bd143493836272216d324e',
};

const ReviewCreateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewFormData>();
  const prevCategoryUrl = '/category/오디오'; // FIXME: 더미데이터 <- 이전 페이지의 카테고리 값(id, name)받아와야함
  const prevCategoryState = { id: '63bd141d93836272216d324a', name: '오디오' };
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isOpenCancelModal, setIsOpenCancelModal] = useState(false);

  const onClickCancelButton = useCallback(() => {
    setIsOpenCancelModal(true);
  }, []);

  const onOffCancelModal = useCallback(() => {
    setIsOpenCancelModal(false);
  }, []);

  const onSubmitReview: SubmitHandler<ReviewFormData> = ({
    title,
    contents,
    image,
    category,
  }) => {
    console.log(title, contents, image, category);

    setLoading(true);
    const titleAndContent = {
      title,
      contents,
    };

    const formData = new FormData();
    formData.append('title', JSON.stringify(titleAndContent));
    formData.append('image', image[0]);
    formData.append('channelId', '63bd141d93836272216d324a');

    // api
    //   .post('/posts/create', formData, {
    //     headers: {
    //       Authorization:
    //         'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzYzAyMmNkNmM1ZGQzMmZhMjllNDc1ZCIsImVtYWlsIjoic3Vod2FAbmF2ZXIuY29tIn0sImlhdCI6MTY3MzUzNjIwNX0.VabAJ1sxYkvnyZZRLMcPGqfA6KwYfuDXWJAFhKtOp7k',
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   })
    //   .then(() =>
    //     navigate(prevCategoryUrl, {
    //       state: prevCategoryState,
    //     })
    //   )
    //   .finally(() => setLoading(false));
    // TODO: 현재 어떤 카테고리에서 글 생성했는지 받아와야함. 글 생성 후, 다시 그 카테고리 페이지로 이동해야함. 현재는 오디오로 지정해둠
  };

  return (
    <>
      <div className="flex justify-center text-TEXT_BASE_BLACK">
        <div className="flex flex-col w-5/12 max-md:w-9/12">
          <h1 className="text-xl pb-2.5 self-start">리뷰작성</h1>
          <form className="flex flex-col">
            <RegisterInput
              type="text"
              placeholder="제목"
              style={{
                container: 'mb-4 flex flex-col',
                input: 'input w-full bg-GRAY_100',
              }}
              register={register}
              registerName="title"
              registerRules={{ required: '제목을 입력해주세요' }}
              errors={errors.title}
            />
            <RegisterTextarea
              rows={10}
              placeholder="사용후기를 남겨주세요"
              style={{
                container: 'flex flex-col mb-4',
                textarea: 'textarea bg-GRAY_100 text-sm',
              }}
              register={register}
              registerName="contents"
              registerRules={{ required: '내용을 입력해주세요' }}
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
              registerRules={{ required: '1장의 이미지를 올려주세요' }}
              errors={errors.image}
            />
            <h2 className="text-lg pb-2.5 self-start font-bold">작성할 카테고리</h2>
            <fieldset className="flex flex-wrap ">
              {Object.keys(Dummy_Channel).map((channelName) => {
                return (
                  <label
                    key={channelName}
                    className="flex mr-4 rounded-xl cursor-pointer hover:text-[#BE3555]"
                    htmlFor={channelName}
                  >
                    <RegisterInput
                      id={channelName}
                      type="radio"
                      style={{
                        container: 'mr-[3px]',
                        input: 'radio radio-error',
                      }}
                      value={channelName}
                      register={register}
                      registerName="category"
                      registerRules={{ required: '카테고리를 골라주세요' }}
                    />
                    {channelName}
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
