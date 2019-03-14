import { useState } from 'react';

export const useInput = () => {
  const [value, setValue] = useState(false);

  return {
    value,
    setValue
  };
};