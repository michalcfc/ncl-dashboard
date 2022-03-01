import {
  useEffect, useState,
} from 'react';

export interface WindowSize {
  height: number;
  width: number;
}

const getWindowSize = () => ({
  height: window.innerHeight,
  width: window.innerWidth,
});

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>(getWindowSize());

  const isMobile = Number(windowSize.width) <= 992;
  function handleWindowSizeChange() {
    setWindowSize(getWindowSize());
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return isMobile;
};
