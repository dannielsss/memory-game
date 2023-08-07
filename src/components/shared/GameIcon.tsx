import { FC } from "react";

import ResetIcon from "@/assets/reset-icon.svg";
import BallIcon from "@/assets/ball-icon.svg";
import BookIcon from "@/assets/book-icon.svg";
import CarIcon from "@/assets/car-icon.svg";
import GuitarIcon from "@/assets/guitar-icon.svg";
import PhoneIcon from "@/assets/phone-icon.svg";
import TvIcon from "@/assets/tv-icon.svg";
import TapIcon from "@/assets/tap-icon.svg";
import { TypeGameCard } from "@/context/Game/GameContext";
import { DEFAULT_ICON } from "@/constants";

interface Props {
  type?: TypeGameCard;
  selected?: boolean;
  className?: string;
}

type Icons = {
  [type: TypeGameCard]: string;
};

// Image for the card
const GameIcon: FC<Props> = ({ type, selected = true, className = "" }) => {
  const icons: Icons = {
    ball: BallIcon,
    book: BookIcon,
    car: CarIcon,
    guitar: GuitarIcon,
    phone: PhoneIcon,
    tv: TvIcon,
    [DEFAULT_ICON]: TapIcon,
    reset: ResetIcon,
  };

  const icon = icons[selected ? type || "" : DEFAULT_ICON];

  if (icon)
    return <img className={className} src={icon} alt={`${type} icon`} />;
  return <p>Error loading card icon</p>;
};

export default GameIcon;
