import { FC, useState } from 'react';
import GameIcon from '@/components/shared/GameIcon';
import { GameTableHeaderStyled } from './styled';
import useTimer from '@/hooks/useTimer';
import ConfirmModal from '../ConfirmModal';

interface GameTableHeaderProps {
  resetCards: () => void;
}

const GameTableHeader: FC<GameTableHeaderProps> = ({ resetCards }) => {
  const [minutes, seconds, { resetTimer }] = useTimer();
  const [isShowModalConfirm, setIsShowModalConfirm] = useState(false);

  const handleAcceptReset = () => {
    resetCards();
    resetTimer();
  };

  const handleClickReset = () => {
    setIsShowModalConfirm(true);
  };
  return (
    <>
      <ConfirmModal
        handleAccept={handleAcceptReset}
        setShow={setIsShowModalConfirm}
        show={isShowModalConfirm}
      />
      <GameTableHeaderStyled>
        <p>
          {minutes}:{seconds}
        </p>
        <button onClick={handleClickReset} className="btn">
          <GameIcon type="reset" />
        </button>
      </GameTableHeaderStyled>
    </>
  );
};

export default GameTableHeader;
