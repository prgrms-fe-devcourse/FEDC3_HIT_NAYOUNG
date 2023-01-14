import api from '@/Api/api';
import Logo from '@/components/Auth/Logo';
import WarningLabel from './WarningLabel';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { HOME_PAGE } from '@/utils/constants';

type FormData = {
  errors: {
    email: {
      message: string;
    };
  };
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  extraError: string;
};

const SignupForm = () => {
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
    formState: { errors, isDirty, isValid },
  } = useForm<FormData>({ mode: 'onChange' });

  const fullName = watch('fullName');
  const email = watch('email');
  const password = watch('password');

  const callSignupAPIBody = {
    email,
    fullName,
    password,
  };

  const callSignupAPI = async () => {
    try {
      const response = await api.post('/signup', callSignupAPIBody, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      localStorage.setItem('login-token', response.data.token);
      navigate(HOME_PAGE);
    } catch (error) {
      setError('email', {
        type: 'server',
        message: '중복된 ID가 존재합니다!',
      });
    }
  };

  const onCheckSamePassword = (data: FormData) => {
    if (data.password !== data.confirmPassword) {
      setError(
        'confirmPassword',
        { message: '비밀번호가 다릅니다.' },
        { shouldFocus: true }
      );
    } else {
      callSignupAPI();
    }
  };

  return (
    <div className="pt-11 overflow-hidden flex flex-col items-center justify-center text-center text-TEXT_BASE_BLACK">
      <form onSubmit={handleSubmit(onCheckSamePassword)}>
        <Logo logoText="회원가입" />
        <div className="form-control w-80 max-w-xs mt-7">
          <span className="text-base">이름</span>
          <input
            {...register('fullName', {
              required: '이름을 입력해 주세요.',
              validate: (value: string) =>
                value === 'admin' ? 'admin으로 이름을 생성할 수 없습니다.' : true,
            })}
            type="text"
            autoComplete="off"
            placeholder="이름을 입력해 주세요."
            className="input input-bordered text-center bg-white border-INPUT_BORDER"
          />
        </div>
        {errors?.fullName && <WarningLabel message={errors.fullName.message} />}
        <br />
        <div className="form-control w-80 max-w-xs mt-1">
          <div className="text-base">이메일</div>
          <input
            {...register('email', {
              required: '이메일을 입력해 주세요.',
              pattern: {
                value: /^[A-Za-z0-9+-_.]+@[A-Za-z]+\.com$|\.co.kr$|\.net$|\.kr$/,
                message: '정확한 이메일 주소를 넣어 주세요.',
              },
            })}
            type="text"
            autoComplete="off"
            placeholder="이메일을 입력해 주세요."
            className="input input-bordered text-center bg-white border-INPUT_BORDER"
          />
        </div>
        {errors?.email && <WarningLabel message={errors.email.message} />}
        <br />
        <div className="w-80 max-w-xs mt-1">
          <div className="text-base">비밀번호</div>
          <div className="relative form-control">
            <input
              {...register('password', {
                required: '비밀번호를 입력해 주세요.',
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/,
                  message:
                    '최소 8자, 최대 20자, 최소 하나의 문자, 숫자, 특수 문자가 필요합니다.',
                },
              })}
              type={isShowPassword ? 'text' : 'password'}
              autoComplete="off"
              placeholder="비밀번호를 입력해 주세요."
              className="input input-bordered text-center bg-white border-INPUT_BORDER"
            />
            <i
              className="absolute top-4 right-5 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {isShowPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
            </i>
          </div>
        </div>
        {errors?.password && <WarningLabel message={errors.password.message} />}
        <br />
        <div className="form-control w-80 max-w-xs mt-1">
          <div className="text-base">비밀번호 확인</div>
          <input
            {...register('confirmPassword', {
              required: '비밀번호를 확인해 주세요.',
            })}
            type="password"
            autoComplete="off"
            placeholder="비밀번호를 확인해 주세요."
            className="input input-bordered text-center bg-white border-INPUT_BORDER"
          />
        </div>
        {errors?.confirmPassword && (
          <WarningLabel message={errors.confirmPassword.message} />
        )}
        <br />
        <button
          type="submit"
          disabled={!isDirty || !isValid}
          className="btn w-80 mt-3 bg-BASE border-BASE hover:bg-HOVER hover:border-HOVER text-white disabled:bg-BUTTON_DISABLED disabled:text-BUTTON_TEXT_DISABLED"
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
