import api from '@/Api/api';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

type EditUserData = {
  image: string;
  fullName: string;
  username: string;
  password: string;
};

const FILE_SIZE_MAX_LIMIT = 5 * 1024 * 1024; // 5MB

const EditProfile = () => {
  const [user, setUser] = useState<EditUserData>();
  const [userInfomation, setUserInformation] = useState({
    fullName: '',
    username: '',
    password: '',
  });
  const inputRef = useRef<HTMLInputElement | null>(null);
  const token = localStorage.getItem('login-token');

  const onUpLoadImage = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const files = (target.files as FileList)[0];

    if (files === undefined) {
      return;
    }

    if (files.size > FILE_SIZE_MAX_LIMIT) {
      target.value = '';
      alert('업로드 가능한 최대 용량은 5MB입니다.');
      return;
    }

    console.log(files);
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
        console.log('파일 업로드 성공');
        console.log(response.data);
        // 사진 변경시 바로 적용하기 위한 함수 호출
        // 뭔가 좋지 않은 코드 같음
        getUser();
      } catch (error) {
        console.log('파일 업로드 실패');
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
    // fullname, username, password 다 적지 않고 한번에 하는 방법이 있나요?
    // [dataName]: data.[dataName] 처럼?
    setUserInformation({
      ...userInfomation,
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
      ...userInfomation,
      [name]: value,
    });
  };

  const saveAPIBody = {
    fullName: userInfomation.fullName,
    username: userInfomation.username,
  };

  const onClickSaveButton = async () => {
    await api.put('/settings/update-user', saveAPIBody, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    await api.put(
      '/settings/update-password',
      { password: userInfomation.password },
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
  };

  console.log(userInfomation);

  return (
    <div className="max-w-xl w-full my-0 mx-auto">
      {user && (
        <div className="flex flex-col items-center">
          <div className="avatar mt-10">
            <div className="w-36 rounded-full">
              <img
                src={user?.image ? user?.image : 'https://placeimg.com/200/200/arch'}
              />
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
            <button
              className="btn w-70 bg-BASE border-BASE hover:bg-HOVER hover:border-HOVER mt-4"
              onClick={onUploadImageButtonClick}
            >
              프로필 이미지 변경
            </button>
          </div>
          <div>
            <span>FullName: </span>
            <input
              className="input input-bordered text-center mt-5"
              name="fullName"
              value={userInfomation.fullName || ''}
              onChange={onChangeInputValue}
            />
          </div>
          <div>
            <span>UserName: </span>
            <input
              className="input input-bordered text-center mt-5"
              name="username"
              value={userInfomation.username || ''}
              onChange={onChangeInputValue}
            />
          </div>
          <div>
            <span>Password: </span>
            <input
              className="input input-bordered text-center mt-5"
              name="password"
              value={userInfomation.password || ''}
              onChange={onChangeInputValue}
            />
          </div>
          <Link to={'/mypage'}>
            <button
              type="submit"
              className="btn w-80 bg-BASE border-BASE hover:bg-HOVER hover:border-HOVER mt-4"
              onClick={onClickSaveButton}
            >
              저장
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
