import { Home, Login, Signup, ReviewList, ReviewDetail, NotFound } from './pages';
import { Route, Routes } from 'react-router-dom';
import {
  HOME_PAGE,
  LOGIN_PAGE,
  NOT_FOUND_PAGE,
  REVIEW_DETAIL_PAGE,
  REVIEW_LIST_PAGE,
  SIGNUP_PAGE,
  SEARCH_PAGE,
  ALARM_PAGE,
  MY_PAGE,
  EDIT_MY_PAGE,
  CREATE_REVIEW_PAGE,
} from '@/utils/constants';
import Search from './pages/Search';
import Alarm from './pages/Alarm';
import MyInfo from './pages/MyInformation';
import ReviewCreate from './pages/ReviewCreate';
import Navigation from './components/Navigation';
import EditMyProfile from './pages/EditMyProfile';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path={HOME_PAGE} element={<Home />} />
        <Route path={LOGIN_PAGE} element={<Login />} />
        <Route path={SIGNUP_PAGE} element={<Signup />} />
        <Route path={SEARCH_PAGE} element={<Search />} />
        <Route path={ALARM_PAGE} element={<Alarm />} />
        <Route path={MY_PAGE} element={<MyInfo />} />
        <Route path={EDIT_MY_PAGE} element={<EditMyProfile />} />
        <Route path={CREATE_REVIEW_PAGE} element={<ReviewCreate />} />
        <Route path={REVIEW_LIST_PAGE} element={<ReviewList />} />
        <Route path={REVIEW_DETAIL_PAGE} element={<ReviewDetail />} />
        <Route path={NOT_FOUND_PAGE} element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
