import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { setLocalStorage } from '@/utils/storage';
import { HOME_PAGE, SIGNUP_PAGE } from '@/utils/constants';

import api from '@/Api/api';

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { LOGIN_SUCCESS } from '@/components/Toast/ToastText';
import Logo from './Logo';

const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setIsShowPassword(!isShowPassword);
  };

  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm<FormState>({ mode: 'onChange' });

  const email = watch('email');
  const password = watch('password');

  const onClickLoginButton = async () => {
    const loginBody = {
      email: email,
      password: password,
    };
    try {
      const response = await api.post(`/login`, loginBody, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response) {
        const token = response.data.token;
        setLocalStorage('login-token', token);
        navigate(HOME_PAGE);
        toast.success(LOGIN_SUCCESS);
      }
    } catch {
      setError('password', {
        message: '아이디 또는 비밀번호가 일치하지 않습니다. 다시 입력해 주세요.',
      });
    }
  };

  type FormState = {
    email: string;
    password: string;
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center text-center text-TEXT_BASE_BLACK">
      <form onSubmit={handleSubmit(onClickLoginButton)}>
        <div className="mt-20">
          <Logo logoText="로그인" />
        </div>
        <div className="form-control w-80 mt-14">
          <div className="text-base">이메일</div>
          <input
            {...register('email', {
              required: '이메일 입력은 필수입니다.',
              pattern: {
                value: /^[A-Za-z0-9+-_.]+@[A-Za-z]+\.com$|\.co.kr$/,
                message: '정확한 이메일 주소를 입력해 주세요.',
              },
            })}
            type="text"
            placeholder="이메일을 입력해 주세요."
            className="input input-bordered text-center bg-white border-INPUT_BORDER"
          />
        </div>
        <span className="label-text-alt text-red-500">{errors?.email?.message}</span>
        <br />
        <div className="relative form-control w-80 mt-2">
          <div className="text-base">비밀번호</div>
          <input
            {...register('password', {
              required: '비밀번호 입력은 필수입니다.',
              minLength: {
                value: 8,
                message: '8자리 이상의 비밀번호를 입력해 주세요.',
              },
            })}
            type={isShowPassword ? 'text' : 'password'}
            placeholder="비밀번호를 입력해 주세요."
            autoComplete="off"
            className="input input-bordered text-center bg-white border-INPUT_BORDER"
          />
          <i
            className="absolute top-10 right-5 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {isShowPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </i>
        </div>
        <span className="label-text-alt text-red-500">{errors?.password?.message}</span>
        <br />
        <div>
          <button
            type="submit"
            className="btn w-80 mt-10 bg-BASE border-BASE hover:bg-HOVER hover:border-HOVER text-white"
          >
            로그인
          </button>
        </div>
        <div>
          <Link to={SIGNUP_PAGE}>
            <button className="btn w-80 mt-8 bg-BASE border-BASE hover:bg-HOVER hover:border-HOVER text-white">
              회원가입
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
