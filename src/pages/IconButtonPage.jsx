import { useState } from 'react';
import { IconButton } from '../components/IconButton';
import { Modal } from '../components/Modal';
import { ReactComponent as IconSpeaker } from '../icons/speaker.svg';

export const IconButtonPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <>
      <IconButton onClick={toggleModal} aria-label="What button to do">
        <IconSpeaker width="40" height="40" fill="#ffffff" />
      </IconButton>

      <p>Button open example modal</p>

      {isModalOpen && (
        <Modal onToggleModal={toggleModal}>
          <p>Hello? How are you? :)</p>
        </Modal>
      )}
    </>
  );
};
