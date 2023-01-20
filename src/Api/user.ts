import { UserList } from '@/types/userList';

import { getLocalStorage } from '@/utils/storage';

import api from '@/Api/api';

const getAxiosHeader = () => {
  const token = getLocalStorage('login-token');
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

// getUserInformation -> 자신 정보 반환, 없는 경우 false 반환
// 호출할 때 async await로 받아줘야 합니다!
// 다른 유저 정보 받는 함수랑 헷갈려서 이름 변경 필요할 듯
// getUserInformation -> getMyInformation ?
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

// 사용자 목록 6명까지 받는 함수. 자기 자신과 admin은 제외
const getUserNameList = async () => {
  try {
    const { data } = await api.get(`/users/get-users`);
    if (data) {
      const getMyName = async () => {
        const { fullName } = await getUserInformation();
        return fullName;
      };
      const myName = await getMyName();

      const userList = data
        .filter((data: UserList) => {
          return data.fullName !== myName && data.fullName !== 'Admin';
        })
        .slice(0, 6);

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
