import api from '@/Api/api';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from './Input';
import Logo from './Logo';

const Login = () => {
  const [account, setAccount] = useState({
    id: '',
    password: '',
  });

  const { register, handleSubmit } = useForm();

  const onChangeInputValue = (e: any) => {
    const { name, value } = e.target;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  const onClickLoginButton = async () => {
    const { id, password } = account;
    // admin@programmers.co.kr
    // programmers
    const login = await api
      .post(
        `/login`,
        {
          email: id,
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
      });
  };

  return (
    <center>
      <form onSubmit={handleSubmit(onClickLoginButton)}>
        <br />
        <div className="absolute left-3.5">뒤로가기</div>
        <Logo logoText="로그인" />
        <br />
        <Input
          inputName="이메일"
          inputType="id"
          placeholder="이메일을 입력해 주세요."
          onChangeInputValue={onChangeInputValue}
        />
        <br />
        <Input
          inputName="비밀번호"
          inputType="password"
          placeholder="비밀번호를 입력해 주세요."
          onChangeInputValue={onChangeInputValue}
        />
        <br />
        <button
          type="submit"
          className="btn w-2/5 min-w-[250px] bg-BASE border-BASE hover:bg-HOVER hover:border-HOVER"
        >
          로그인
        </button>
        <br />
      </form>
    </center>
  );
};

export default Login;
