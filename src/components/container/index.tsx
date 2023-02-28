import React from 'react';
import { IContainerProps } from '../../model/common';
import styled from 'styled-components/macro';

/**
 *
 * @param props
 * @returns
 */
const Container: React.FC<IContainerProps> = (props) => {
  const {
    flexDirection,
    justifyContent,
    alignItems,
    children,
    fullWidth,
    ...rest
  } = props;

  const ContainerElement = styled.div`
    display: flex;
    justify-content: ${justifyContent};
    flex-direction: ${flexDirection};
    align-items: ${alignItems};
    padding: ${fullWidth ? '0' : '0 10px'};
    width: 100%;
    max-width: ${fullWidth ? '100%' : '960px'};
  `;

  return <ContainerElement {...rest}>{children}</ContainerElement>;
};

export default Container;
