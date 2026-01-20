import { useState, useEffect } from 'react';
import type { AnimatedNumberProps } from '../../types/game';

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 500;
    const startValue = displayValue;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutQuad = progress * (2 - progress);
      const current = Math.round(startValue + (value - startValue) * easeOutQuad);
      setDisplayValue(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, displayValue]);

  return <>{displayValue.toLocaleString()}</>;
};
