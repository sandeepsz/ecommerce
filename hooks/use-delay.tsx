import { useEffect, useState } from 'react';

/**
 *
 * @param delay in ms
 */
export const useDelay = (delay: number) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return isLoading;
};
