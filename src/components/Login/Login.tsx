import api from '@/Api/api';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { HOME_PAGE, SIGNUP_PAGE } from '@/utils/constants';
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
    try {
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
    } catch {
      setError('password', {
        message: '아이디 또는 비밀번호가 일치하지 않습니다. 다시 입력해 주세요.',
      });
    }
  };

  type formState = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<formState>();

  return (
    <center className="overflow-hidden">
      <form onSubmit={handleSubmit(onClickLoginButton)}>
        <div className="absolute left-6">
          <Link to={HOME_PAGE}>뒤로가기</Link>
        </div>
        <div className="mt-20">
          <Logo logoText="로그인" />
        </div>

        <div className="form-control w-2/5 min-w-[300px] mt-16">
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
        <div className="form-control w-2/5 min-w-[300px] mt-2">
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
        <div>
          <button
            type="submit"
            className="btn w-2/5 min-w-[300px] mt-10 bg-BASE border-BASE hover:bg-HOVER hover:border-HOVER"
          >
            로그인
          </button>
        </div>
        <div>
          <Link to={SIGNUP_PAGE}>
            <button className="btn w-2/5 min-w-[300px] mt-8 bg-BASE border-BASE hover:bg-HOVER hover:border-HOVER">
              회원가입
            </button>
          </Link>
        </div>
      </form>
    </center>
  );
};

export default Login;
