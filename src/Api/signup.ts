import { SIGNUP_SUCCESS } from "@/components/Toast/ToastText";
import { signupFormDataType } from "@/types";
import { HOME_PAGE } from "@/utils/constants";
import { setLocalStorage } from "@/utils/storage";
import { UseFormSetError } from "react-hook-form";
import { NavigateFunction } from "react-router";
import { toast } from "react-toastify";
import api from "./api";

type signupAPIType = {
  navigate: NavigateFunction;
  setError: UseFormSetError<signupFormDataType>;
  email: string;
  fullName: string;
  password: string;
}


const callSignupAPI = async ({ navigate, setError, email, fullName, password }: signupAPIType) => {
  try {
    const response = await api.post('/signup', { email, fullName, password }
    );
    setLocalStorage('login-token', response.data.token);
    navigate(HOME_PAGE);
    toast.success(SIGNUP_SUCCESS);
  } catch (error) {
    setError('email', {
      type: 'server',
      message: '중복된 ID가 존재합니다!',
    });
  }
};

export {callSignupAPI}
