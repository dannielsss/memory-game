import { useEffect, useRef, useState } from 'react';

const SECOND = 1000;

type TimerHook = [
  string,
  string,
  {
    resetTimer: () => void;
  }
];

export default function useTimer(): TimerHook {
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const intervalId = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      if (seconds && (seconds + 1) % 60 === 0) {
        setMinutes(minutes + 1);
        setSeconds(0);
        return;
      }
      setSeconds(seconds + 1);
    }, SECOND);
    return () => clearInterval(intervalId.current || undefined);
  }, [seconds]);

  const format = (time: number): string => {
    if (time < 10) return `0${time}`;
    return String(time);
  };

  const resetTimer = () => {
    clearInterval(intervalId.current || undefined);
    setSeconds(0);
    setMinutes(0);
  };

  return [
    format(minutes),
    format(seconds),
    {
      resetTimer,
    },
  ];
}
