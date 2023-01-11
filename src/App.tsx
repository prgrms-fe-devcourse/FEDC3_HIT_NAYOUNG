import { Home, Login, Signup, ReviewList, ReviewDetail, NotFound } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import {
  HOME_PAGE,
  LOGIN_PAGE,
  NOT_FOUND_PAGE,
  REVIEW_DETAIL_PAGE,
  REVIEW_LIST_PAGE,
  SIGNUP_PAGE,
} from '@/utils/constants';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={HOME_PAGE} element={<Home />} />
        <Route path={LOGIN_PAGE} element={<Login />} />
        <Route path={SIGNUP_PAGE} element={<Signup />} />
        <Route path={REVIEW_LIST_PAGE} element={<ReviewList />} />
        <Route path={REVIEW_DETAIL_PAGE} element={<ReviewDetail />} />
        <Route path={NOT_FOUND_PAGE} element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
