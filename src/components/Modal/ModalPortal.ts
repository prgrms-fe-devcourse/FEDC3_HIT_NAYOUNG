import { ReactNode } from 'react';
import ReactDom from 'react-dom';

type ModalProps = {
  children: ReactNode;
};
const ModalPortal = ({ children }: ModalProps) => {
  const el = document.getElementById('modal-root') as HTMLElement;

  return ReactDom.createPortal(children, el);
};

export default ModalPortal;
