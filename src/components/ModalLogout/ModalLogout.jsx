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

const ModalLogout = ({ openExitModal, setIsOpenExitModal }) => {
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
