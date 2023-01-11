import api from '@/Api/api';
import { useForm } from 'react-hook-form';
import Logo from '@/components/Login/Logo';
import WarningLabel from './WarningLabel';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';
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

type SignUpAPIData = {
  fullName: string;
  email: string;
  password: string;
};

const SignupForm = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordShow(!passwordShow);
  };

  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<FormData>({ mode: 'onChange' }); // onChange를 통해 입력할 때마다 유효성 겅사를 합니다

  // watch를 통해 input value를 체크하여 api 날릴때 해당 값을 넣어서 보내줍니다
  const fullName = watch('fullName');
  const email = watch('email');
  const password = watch('password');

  // SugnUpUser 네이밍이 마음에 안드는데 추천해주세요
  // SignUpUser를 다른 파일로 빼놓는게 좋을까요?
  const SignUpUser = async ({ fullName, email, password }: SignUpAPIData) => {
    try {
      const response = await api.post(
        '/signup',
        {
          email: email,
          fullName: fullName,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      navigate(HOME_PAGE);
    } catch (error) {
      setError('email', {
        type: 'server',
        message: '중복된 ID가 존재합니다!',
      });
    }
  };

  // 비밀번호 확인하는 로직인데 onVlid말고 다른 함수명 추천해주세요
  const onValid = (data: FormData) => {
    if (data.password !== data.confirmPassword) {
      setError(
        'confirmPassword',
        { message: '비밀번호가 다릅니다' },
        { shouldFocus: true }
      );
    } else {
      console.log('성공');
      SignUpUser({ fullName, email, password });
    }
  };

  return (
    <center className="mt-10">
      <form onSubmit={handleSubmit(onValid)}>
        <Logo logoText="회원가입" />
        <div className="form-control w-80 max-w-xs mt-4">
          <span className="text-lg font-bold">이름</span>
          <input
            {...register('fullName', {
              required: '이름을 입력해주세요',
              validate: (value: string) =>
                value === 'admin' ? 'admin으로 이름을 생성할 수 없습니다' : true,
            })}
            type="text"
            autoComplete="off"
            placeholder="이름을 입력해주세요"
            className="input input-bordered text-center"
          />
        </div>
        {errors?.fullName && <WarningLabel message={errors.fullName.message} />}
        <br />
        <div className="form-control w-80 max-w-xs mt-4">
          <div className="text-lg font-bold">이메일</div>
          <input
            {...register('email', {
              required: '이메일을 입력해주세요',
              pattern: {
                value: /^[A-Za-z0-9+-_.]+@[A-Za-z]+\.com$/,
                message: '정확한 이메일 주소를 넣어주세요',
              },
            })}
            type="text"
            autoComplete="off"
            placeholder="이메일을 입력해주세요"
            className="input input-bordered text-center"
          />
        </div>
        {errors?.email && <WarningLabel message={errors.email.message} />}
        <br />
        <div className="w-80 max-w-xs mt-4">
          <div className="text-lg font-bold">비밀번호</div>
          <div className="relative form-control">
            <input
              {...register('password', {
                required: '비밀번호를 입력해주세요',
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/,
                  message:
                    '최소 8자, 최대 20자, 최소 하나의 문자, 숫자, 특수 문자가 필요합니다',
                },
              })}
              type={passwordShow ? 'text' : 'password'}
              autoComplete="off"
              placeholder="비밀번호를 입력해주세요"
              className="input input-bordered text-center"
            />
            <i
              className="absolute top-4 right-5 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {passwordShow ? <AiFillEye /> : <AiFillEyeInvisible />}
            </i>
          </div>
        </div>
        {errors?.password && <WarningLabel message={errors.password.message} />}
        <br />
        <div className="form-control w-80 max-w-xs mt-4">
          <div className="text-lg font-bold">비밀번호 확인</div>
          <input
            {...register('confirmPassword', {
              required: '비밀번호를 확인해주세요',
            })}
            type="password"
            autoComplete="off"
            placeholder="비밀번호를 확인해주세요"
            className="input input-bordered text-center"
          />
        </div>
        {errors?.confirmPassword && (
          <WarningLabel message={errors.confirmPassword.message} />
        )}
        <br />
        <button
          type="submit"
          disabled={!isDirty || !isValid}
          className="btn w-80 bg-BASE border-BASE mt-4"
        >
          회원가입
        </button>
      </form>
    </center>
  );
};

export default SignupForm;
