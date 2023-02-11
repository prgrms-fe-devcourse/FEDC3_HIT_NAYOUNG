import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/utils/constants';
import Logo from '@/components/Auth/Logo';
import { callSignupAPI } from '@/Api/signup';
import { signupFormDataType } from '@/types';
import FormInput from '../common/ReactHookForm/FormInput';

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
  } = useForm<signupFormDataType>({ mode: 'onChange' });

  const fullName = watch('fullName');
  const email = watch('email');
  const password = watch('password');

  const blockSpaceBar = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLDivElement;
    if (e.key === ' ') {
      e.preventDefault();
      target.classList.add('animate-shakeInput');

      setTimeout(function () {
        target.classList.remove('animate-shakeInput');
      }, 300);
    }
  };

  const onCheckSamePassword = (data: signupFormDataType) => {
    if (data.password !== data.confirmPassword) {
      setError(
        'confirmPassword',
        { message: '비밀번호가 다릅니다.' },
        { shouldFocus: true }
      );
    } else {
      callSignupAPI({ navigate, setError, email, fullName, password });
    }
  };

  return (
    <div className="pt-11 overflow-hidden flex flex-col items-center justify-center text-center pb-20 text-TEXT_BASE_BLACK">
      <form onSubmit={handleSubmit(onCheckSamePassword)}>
        <Logo logoText="회원가입" />
        <div className="text-base mt-5">이름</div>
        <FormInput<signupFormDataType>
          type="text"
          autoComplete="off"
          placeholder="이름을 입력해주세요"
          style={{
            container: 'form-control w-80 h-20 max-w-xs',
            input: 'input input-bordered text-center bg-white border-INPUT_BORDER',
          }}
          register={register}
          registerName="fullName"
          registerRules={{
            required: '이름을 입력해 주세요.',
            validate: (value: string) =>
              value === 'admin' ? 'admin으로 이름을 생성할 수 없습니다.' : true,
          }}
          errors={errors.fullName}
        />
        <div className="text-base">이메일</div>
        <FormInput<signupFormDataType>
          type="text"
          autoComplete="off"
          placeholder="이메일을 입력해주세요"
          style={{
            container: 'form-control w-80 h-20 max-w-xs',
            input: 'input input-bordered text-center bg-white border-INPUT_BORDER',
          }}
          register={register}
          registerName="email"
          registerRules={{
            required: '이메일을 입력해 주세요.',
            pattern: {
              value: EMAIL_REGEX,
              message: '정확한 이메일 주소를 넣어 주세요.',
            },
          }}
          errors={errors.email}
        />
        <div className="text-base">비밀번호</div>
        <div className="relative h-24">
          <FormInput<signupFormDataType>
            type={isShowPassword ? 'text' : 'password'}
            autoComplete="off"
            placeholder="비밀번호를 입력해주세요"
            style={{
              container: 'form-control w-80 h-30 max-w-xs',
              input: 'input input-bordered text-center bg-white border-INPUT_BORDER',
            }}
            register={register}
            registerName="password"
            registerRules={{
              required: '비밀번호를 입력해 주세요.',
              pattern: {
                value: PASSWORD_REGEX,
                message:
                  '최소 8자, 최대 20자, 최소 하나의 문자, 숫자, 특수 문자가 필요합니다.',
              },
            }}
            onKeyDown={blockSpaceBar}
            maxLength={20}
            errors={errors.password}
          >
            <i
              className="absolute top-4 right-5 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {isShowPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
            </i>
          </FormInput>
        </div>
        <div className="text-base">비밀번호 확인</div>
        <FormInput<signupFormDataType>
          type="password"
          autoComplete="off"
          placeholder="비밀번호를 확인해주세요"
          style={{
            container: 'form-control w-80 h-20 max-w-xs',
            input: 'input input-bordered text-center bg-white border-INPUT_BORDER',
          }}
          register={register}
          registerName="confirmPassword"
          registerRules={{
            required: '비밀번호를 확인해 주세요.',
          }}
          onKeyDown={blockSpaceBar}
          maxLength={20}
          errors={errors.confirmPassword}
        />
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
