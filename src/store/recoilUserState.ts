import { UserDataProps } from "@/types";
import { atom, selector } from "recoil";

export const userState = atom<UserDataProps>({
  key: 'USER_STATE',
  default: {
    posts: [],
    likes: [],
    comments: [],
    following: [],
    followers: [],
    image: '',
    fullName: '',
    username: '',
    _id: '',
    email: '',
  }
})

export const getUserState = selector({
  key: 'getUserState',
  get: ({ get }) => {
    const result = get(userState)
    return result
  },
});