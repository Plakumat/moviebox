import React from 'react';
import styled from 'styled-components/macro';
import { IPosterTitleProps } from '../../model/common';

/**
 *
 * @param props
 * @returns
 */
const PosterTitle: React.FC<IPosterTitleProps> = (props) => {
  const { children, ...rest } = props;

  const PosterTitleElement = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    border-radius: 10px;
    background: #000;
    padding: 10px 20px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    opacity: 1;
  `;

  return <PosterTitleElement {...rest}>{children}</PosterTitleElement>;
};

export default PosterTitle;
