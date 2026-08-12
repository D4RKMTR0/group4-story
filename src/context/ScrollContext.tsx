import { createContext, useContext, useState } from 'react';

interface ScrollContextType {
  topThreshold: number;
  setTopThreshold: (threshold: number) => void;
}

const ScrollContext = createContext<ScrollContextType>({
  topThreshold: 10,
  setTopThreshold: () => {},
});

export const useScrollThreshold = (threshold: number) => {
  const { setTopThreshold } = useContext(ScrollContext);
  useState(() => {
    setTopThreshold(threshold);
  });
};

export default ScrollContext;