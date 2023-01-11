import api from '@/Api/api';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { HOME_PAGE } from '@/utils/constants';
import Logo from './Logo';

const Login = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState({
    email: '',
    password: '',
  });

  const onChangeInputValue = (e: any) => {
    const { name, value } = e.target;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  const onClickLoginButton = async () => {
    const { email, password } = account;
    await api
      .post(
        `/login`,
        {
          email: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem('login-token', token);
        navigate(HOME_PAGE);
      });
  };

  type formState = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formState>();

  return (
    <center>
      <form onSubmit={handleSubmit(onClickLoginButton)}>
        <br />
        <div className="absolute left-3.5">뒤로가기</div>
        <Logo logoText="로그인" />
        <br />
        <div className="form-control w-2/5 min-w-[250px]">
          <div className="text-sm">이메일</div>
          <input
            {...register('email', {
              required: '이메일 입력은 필수입니다.',
              pattern: {
                value: /^[A-Za-z0-9+-_.]+@[A-Za-z]+\.com$|\.co.kr$/,
                message: '정확한 이메일 주소를 입력해 주세요.',
              },
            })}
            type="text"
            name="email"
            value={account.email}
            placeholder="이메일을 입력해 주세요."
            className="input input-bordered text-center"
            onChange={onChangeInputValue}
          />
        </div>
        <span className="label-text-alt text-red-500">{errors?.email?.message}</span>
        <br />
        <div className="form-control w-2/5 min-w-[250px]">
          <div className="text-sm">비밀번호</div>
          <input
            {...register('password', {
              required: '비밀번호 입력은 필수입니다.',
              minLength: {
                value: 8,
                message: '8자리 이상의 비밀번호를 입력해 주세요.',
              },
            })}
            type="text"
            name="password"
            value={account.password}
            placeholder="비밀번호를 입력해 주세요."
            className="input input-bordered text-center"
            onChange={onChangeInputValue}
          />
        </div>
        <span className="label-text-alt text-red-500">{errors?.password?.message}</span>
        <br />
        <button
          type="submit"
          className="btn w-2/5 min-w-[250px] bg-BASE border-BASE hover:bg-HOVER hover:border-HOVER"
        >
          로그인
        </button>
      </form>
    </center>
  );
};

export default Login;
