import {
  Overlay,
  Modal,
  ModalTitle,
  Wrapper,
  WrapperItem,
  Exit,
  Stay,
} from './ModalLogout.styled';
import { enablePageScroll } from 'scroll-lock';
import { useEffect } from 'react';

const ModalLogout = ({ openExitModal, setIsOpenExitModal }) => {
  useEffect(() => {
    if (openExitModal) {
      document.addEventListener('keydown', closeModalEsc);
    }

    return function () {
      document.removeEventListener('keydown', closeModalEsc);
    };
  }, [openExitModal]);

  function closeModalEsc(e) {
    if (e.key === 'Escape') {
      setIsOpenExitModal(false);
    }
  }

  const disableScrollOn = () => {
    enablePageScroll();
    setIsOpenExitModal(false);
  };

  return (
    <Overlay onClick={disableScrollOn} opened={openExitModal}>
      <Modal onClick={e => e.stopPropagation()} opened={openExitModal}>
        <ModalTitle>Are you definitely want to log out?</ModalTitle>
        <Wrapper>
          <WrapperItem>
            <Exit>Exit </Exit>
          </WrapperItem>
          <WrapperItem>
            <Stay onClick={disableScrollOn}>Cancel</Stay>
          </WrapperItem>
        </Wrapper>
      </Modal>
    </Overlay>
  );
};

export default ModalLogout;
