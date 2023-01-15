import api from '@/Api/api';

const getAxiosHeader = () => {
  const token = localStorage.getItem('login-token');
  if (!token) return false;
  return {
    Authorization: `bearer ${token}`,
    'Content-Type': 'application/json',
  };
};

// checkAuthUser -> 로그인 유무 확인 true, false 반환
const checkAuthUser = async () => {
  try {
    const headers = getAxiosHeader();
    if (!headers) return false;
    const response = await api.get(`/auth-user`, {
      headers: headers,
    });
    if (response) {
      return true;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

// getUserInformation -> 유저 정보 반환, 없는 경우 false 반환
// 호출할 때 async await로 받아줘야 합니다!
const getUserInformation = async () => {
  try {
    const headers = getAxiosHeader();
    if (!headers) return false;
    const response = await api.get(`/auth-user`, {
      headers: headers,
    });
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

const getUserId = async () => {
  try {
    const headers = getAxiosHeader();
    if (!headers) return false;
    const { _id } = await getUserInformation();
    const response = await api.get(`/users/${_id}`);
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

export { checkAuthUser, getUserInformation, getUserId, getAxiosHeader };
