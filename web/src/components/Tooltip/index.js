/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useLayer, Arrow } from 'react-laag';

import { Container, Content } from './styles';

function Tooltip({ children, content, isOpen }) {
  const { triggerProps, layerProps, arrowProps, renderLayer } = useLayer({
    isOpen,
    placement: window.innerWidth > 790 ? 'right-center' : 'bottom-center',
    triggerOffset: 10,
  });

  return (
    <>
      <Container {...triggerProps}>{children}</Container>
      {isOpen &&
        renderLayer(
          <Content className="tooltip" {...layerProps}>
            <Arrow
              {...arrowProps}
              angle={45}
              size={8}
              roundness={0}
              borderWidth={0}
              borderColor="#ffffff"
              backgroundColor="#ff7057"
              layerSide={window.innerWidth > 790 ? 'right' : 'bottom'}
            />
            {content}
          </Content>
        )}
    </>
  );
}

export default Tooltip;
