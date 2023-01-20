import api from '@/Api/api';
import { FILE_SIZE_MAX_LIMIT, MY_PAGE } from '@/utils/constants';
import { getLocalStorage } from '@/utils/storage';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import WarningLabel from '../Auth/WarningLabel';
import Button from '../ReviewCreateForm/Button';
import EditProfileInput from './EditProfileInput';
import { toast } from 'react-toastify';
import { IMAGE_SIZE_WARNING } from '../Toast/ToastText';

type EditUserData = {
  image: string;
  fullName: string;
  username: string;
  password: string;
};

const EditProfile = () => {
  const [user, setUser] = useState<EditUserData>();
  const [userInformation, setUserInformation] = useState({
    fullName: '',
    username: '',
    password: '',
  });
  const inputRef = useRef<HTMLInputElement | null>(null);
  const token = getLocalStorage('login-token');
  const navigate = useNavigate();

  const onUpLoadImage = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const files = (target.files as FileList)[0];

    if (files === undefined) {
      return;
    }

    if (files.size > FILE_SIZE_MAX_LIMIT) {
      target.value = '';
      toast.warning(IMAGE_SIZE_WARNING);
      return;
    }

    if (files !== undefined) {
      try {
        const response = await api.post(
          'users/upload-photo',
          { isCover: false, image: files },
          {
            headers: {
              Authorization: `bearer ${token}`,
              'content-type': 'multipart/form-data',
            },
          }
        );

        getUser();
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  // hook으로 빼보자
  const getUser = async () => {
    const response = await api.get('/auth-user', {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    const { _id } = response.data;
    const { data } = await api.get(`/users/${_id}`);
    setUser(data);
    setUserInformation({
      ...userInformation,
      fullName: data.fullName,
      username: data.username,
      password: data.passowrd,
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  const onChangeInputValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setUserInformation({
      ...userInformation,
      [name]: value,
    });
  };

  const saveAPIBody = {
    fullName: userInformation.fullName,
    username: userInformation.username,
  };

  const onClickSaveButton = async () => {
    await api.put('/settings/update-user', saveAPIBody, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    await api.put(
      '/settings/update-password',
      { password: userInformation.password },
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    navigate(MY_PAGE);
  };

  type FormData = {
    fullName: string;
    password: string;
    username: string;
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isDirty, isValid },
  } = useForm<FormData>({ mode: 'onChange' });

  const onCheckPassword = (data: FormData) => {
    if (data.password === '') {
      setError(
        'password',
        { message: '비밀번호를 입력해주세요.' },
        { shouldFocus: true }
      );
    }
  };

  if (!user) return <div>로그인 유저 정보를 불러오지 못하였습니다</div>;
  return (
    <div className="max-w-xl w-full my-0 mx-auto">
      <form onSubmit={handleSubmit(onCheckPassword)}>
        <div className="flex flex-col items-center">
          <div className="avatar mt-10">
            <div className="w-36 rounded-full">
              <img src={user.image ? user.image : 'https://placeimg.com/200/200/arch'} />
            </div>
          </div>
          <div>
            <input
              className="hidden"
              type="file"
              accept="image/*"
              ref={inputRef}
              onChange={onUpLoadImage}
            />
            <Button
              name="프로필 이미지 변경"
              style="btn w-70 bg-BASE border-BASE hover:bg-HOVER hover:border-HOVER mt-4"
              clickHandler={onUploadImageButtonClick}
            />
          </div>
          <EditProfileInput
            label="Fullname"
            name="fullName"
            data={userInformation.fullName}
            onChangeEditInputValue={onChangeInputValue}
          />
          <EditProfileInput
            label="UserName"
            name="username"
            data={userInformation.username}
            onChangeEditInputValue={onChangeInputValue}
          />
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register('password', {
                onChange: onChangeInputValue,
                required: '비밀번호를 입력해 주세요.',
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/,
                  message:
                    '최소 8자, 최대 20자, 최소 하나의 문자, 숫자, 특수 문자가 필요합니다.',
                },
              })}
              type="password"
              autoComplete="off"
              placeholder="비밀번호를 입력해 주세요."
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {errors?.password && <WarningLabel message={errors.password.message} />}
          <br />
          <button
            type="submit"
            disabled={!isDirty || !isValid}
            className="btn w-80 bg-BASE border-BASE hover:bg-HOVER hover:border-HOVER"
            onClick={onClickSaveButton}
          >
            저장
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
