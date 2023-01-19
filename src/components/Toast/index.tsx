import ToastPortal from './ToastPortal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
  return (
    <ToastPortal>
      <ToastContainer
        className="text-sm text-TEXT_BASE_BLACK"
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        theme="light"
      />
    </ToastPortal>
  );
};

export default Toast;
