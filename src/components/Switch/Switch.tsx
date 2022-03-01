import React, { useState } from 'react';
import { SwitchProps } from './Switch.d';

import {
  SwitchWrapper,
  SwitchInput,
  SwitchSlider,
} from './Switch.styles';

const Switch: React.FC<SwitchProps> = ({
  ...rest
}) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <SwitchWrapper
      {...rest}
    >
      <SwitchInput type="checkbox" />
      <SwitchSlider
        toggle={toggle}
        onClick={() => setToggle(!toggle)}
      />
    </SwitchWrapper>

  );
};

export default Switch;
