import api from '@/Api/api';
import { UserList } from '@/types/userList';

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

const getUserNameList = async () => {
  try {
    const { data } = await api.get(`/users/get-users`);
    if (data) {
      const userList = data.slice(0, 6);
      const userNameList = userList.map((userList: UserList) => {
        return { name: userList.fullName, id: userList._id };
      });
      return userNameList;
    }
  } catch (error) {
    console.error(error);
  }
};

const getOpponentUserId = async (userId: string) => {
  try {
    const response = await api.get(`/users/${userId}`);
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};

export {
  getAxiosHeader,
  checkAuthUser,
  getUserInformation,
  getUserId,
  getUserNameList,
  getOpponentUserId,
};
