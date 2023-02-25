/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
// Funciones auxiliares de diferentes módulos

import { useState, useEffect } from 'react';

export const useDebounce = ( delay:number, value?:string) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};

