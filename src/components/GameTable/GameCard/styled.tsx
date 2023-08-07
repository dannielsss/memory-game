import { Container } from "@/components/shared/Container";
import GameIcon from "@/components/shared/GameIcon";
import { DEFAULT_ICON } from "@/constants";
import { css, keyframes, styled } from "styled-components";

interface GameCardContainerProps {
  selected?: boolean;
}

const getRotate = (type?: string, selected?: boolean): number => {
  if (!type && selected) return 180;
  if (!type && !selected) return 0;
  return type === DEFAULT_ICON ? 0 : 180;
};

const animationCardHover = keyframes`
from {
  -webkit-transform: scale3d(1.1, 1.1, 1.1);
  transform: scale3d(1.1, 1.1, 1.1);
}

30%,
50%,
70%,
90% {
  -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
}

40%,
60%,
80% {
  -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
}

to {
  -webkit-transform: scale3d(1.1, 1.1, 1.1);
  transform: scale3d(1.1, 1.1, 1.1);
}
`;

const animationCardHoverRotate = (rotate: number) => keyframes`
  from {
  transform: rotateY(0deg);
  }
  to {
  transform: rotateY(${rotate}deg);
  }
`;

/**
 * Container for the card game
 */
export const GameCardContainer = styled(Container)<GameCardContainerProps>`
  background: #ffffff;
  border-radius: 10px;
  padding: 1rem;

  height: auto;
  width: 100%;
  height: 120px;
  transition: opacity 0.25s ease, transform 0.25s ease;
  cursor: pointer;
  perspective: 110px;
  transform-style: preserve-3d;
  position: relative;
  ${({ selected }) => {
    const rotate = getRotate("", selected);
    return css`
      transform: rotateY(${rotate}deg);
      &:active {
        transform: rotateY(${rotate}deg) scale(0.95);
      }
      ${selected
        ? css`
            animation: ${animationCardHoverRotate(rotate)} 0.25s 1 ease;
          `
        : css`
            &:hover {
              animation: ${animationCardHover} 1s infinite ease alternate;
            }
          `};
    `;
  }}
`;

export const GameIconStyled = styled(GameIcon)`
  position: absolute;
  backface-visibility: hidden;
  transition: 0.25s ease;
  transform: rotateY(${({ type }) => getRotate(type)}deg);
`;
