import React, { Fragment, useState } from 'react';

import { AccordionItemProps, AccordionChildrenProps } from './AccordionItem.d';

const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div>
      {React.Children
        .map(children, (child: React.ReactElement<AccordionChildrenProps>, index) => (
          <Fragment key={Math.random()}>
            {React.cloneElement(
              child,
              {
                id: index,
                setOpen,
                isOpen,
              },
            )}
          </Fragment>
        ))}
    </div>
  );
};

export default AccordionItem;
