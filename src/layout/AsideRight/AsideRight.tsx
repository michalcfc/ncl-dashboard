import React from 'react';

import {
  AsideWrapper,
} from './AsideRight.styles';

import {
  AsideRightProps,
} from './AsideRight.d';

const AsideRight:React.FC<AsideRightProps> = ({
  isFixed,
  isDisplay,
}) => (
  <div>
    {isDisplay
            && <AsideWrapper isFixed={isFixed} />}
  </div>
);

export default AsideRight;
