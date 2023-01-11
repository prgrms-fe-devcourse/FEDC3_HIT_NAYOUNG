import { Home, Login, Signup, ReviewList, ReviewDetail, NotFound } from './pages';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/category/:category" element={<ReviewList />} />
        <Route path="/category/:category/detail" element={<ReviewDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
