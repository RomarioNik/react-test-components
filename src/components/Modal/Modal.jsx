import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { BackDrop, ModalWindow, ButtonClose } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onToggleModal, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onToggleModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onToggleModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onToggleModal();
    }
  };

  return createPortal(
    <BackDrop onClick={handleBackdropClick}>
      <ModalWindow>
        <ButtonClose type="button" onClick={onToggleModal} />
        {children}
      </ModalWindow>
    </BackDrop>,
    modalRoot
  );
};
