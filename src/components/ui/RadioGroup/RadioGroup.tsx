import React, { createContext, useEffect, useState } from 'react';
import { RadioGroupD } from './RadioGroup.d';
import { RadioGroupLabel, RadioGroupWrapper } from './RadioGroup.styles';

export const RadioContext = createContext(null);

const RadioGroup: React.FC<RadioGroupD> = ({
  label,
  children,
  onChange,
  isBorder,
  defaultValue,
}) => {
  const [state, setState] = useState({
    isBorder,
    value: '',
  });

  const handleOnChange = (value) => {
    setState({
      ...state,
      value,
    });
    onChange(value);
  };

  useEffect(() => {
    setState({
      isBorder,
      value: defaultValue,
    });
  }, [defaultValue]);

  return (
  // eslint-disable-next-line react/jsx-no-constructed-context-values
    <RadioContext.Provider value={[state, handleOnChange]}>
      <RadioGroupWrapper>
        <RadioGroupLabel>
          {label}
        </RadioGroupLabel>
        <div role="radiogroup">{children}</div>
      </RadioGroupWrapper>
    </RadioContext.Provider>
  );
};

export default RadioGroup;
