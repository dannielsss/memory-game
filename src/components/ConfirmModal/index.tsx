import React from 'react';
import CustomButton from '../CustomButton';
import {
  ConfirmModalButtons,
  ConfirmModalContainer,
  ConfirmModalContent,
} from './styled';

interface Props {
  /**
   * When you click accept, what will you do?
   * @returns
   */
  handleAccept: () => void;

  /**
   * Manage modal states
   */
  show: boolean;
  setShow: (isShow: boolean) => void;
}

/**
 * Alert to confirm some action
 * @returns
 */
const ConfirmModal: React.FC<Props> = ({ handleAccept, show, setShow }) => {
  // When you press yes do this...
  const handleYesClick = () => {
    handleAccept();
    setShow(false);
  };

  // When you press no do this...
  const handleNoClick = () => {
    setShow(false);
  };

  if (show) {
    return (
      <ConfirmModalContainer>
        <ConfirmModalContent>
          <p>Are you sure to restart the game?</p>
          <ConfirmModalButtons>
            <CustomButton
              width="100%"
              value="Yes"
              variant="primary"
              onClick={handleYesClick}
            />
            <CustomButton
              width="100%"
              value="No"
              variant="secondary"
              onClick={handleNoClick}
            />
          </ConfirmModalButtons>
        </ConfirmModalContent>
      </ConfirmModalContainer>
    );
  }

  return null;
};

export default ConfirmModal;
