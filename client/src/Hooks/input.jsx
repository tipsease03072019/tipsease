import { useState } from 'react';

export const useInput = (tipInit, limit) => {
  const [value, setValue] = useState(tipInit);

  const updateValue = e => {
    if(String(e.target.value).length < limit + 1){
      setValue(e.target.value);
    }
  };

  return {
    value,
    setValue,
    updateValue
  };
};

export const useTrueFalse = () => {
  const [value, setValue] = useState(false);

  return {
    value,
    setValue
  };
};