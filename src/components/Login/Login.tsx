import Button from './Button';
import Input from './Input';
import Logo from './Logo';

const Login = () => {
  return (
    <center>
      <br />
      <Logo logoText="로그인" />
      <br />
      <Input inputName="이메일" placeholder="이메일을 입력해 주세요." />
      <br />
      <Input inputName="비밀번호" placeholder="비밀번호를 입력해 주세요." />
      <br />
      <Button buttonText="로그인" />
    </center>
  );
};

export default Login;
