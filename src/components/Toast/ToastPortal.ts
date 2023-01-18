import { ReactNode } from 'react';
import ReactDom from 'react-dom';

type ToastProps = {
  children: ReactNode;
};
const ToastPortal = ({ children }: ToastProps) => {
  const portalId = 'toast-root';
  const el = document.getElementById(portalId) as HTMLElement;

  if (el) {
    return ReactDom.createPortal(children, el);
  } else {
    const portalContainer = document.createElement('div');
    portalContainer.id = portalId;
    portalContainer.appendChild(el);
    return ReactDom.createPortal(children, el);
  }
};

export default ToastPortal;
