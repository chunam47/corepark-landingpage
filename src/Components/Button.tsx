import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  titleButton?: string;
  style?: {};
  bg?: string;
}

const Button = ({ titleButton, style, bg }: Props) => {
  return <ButtonWrapper style={style}>{titleButton}</ButtonWrapper>;
};

export default Button;

const ButtonWrapper = styled.button`
  padding: 13px 40px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 127%;
  position: relative;

  &:after,
  &:before {
    content: '';
    position: absolute;
    height: 0;
    width: 0;
    border-style: solid;
    border-color: transparent #ccc;
  }
  &:before {
    left: -17px;
    border-width: 17px 17px 17px 0;
  }
  &:after {
    right: -17px;
    border-width: 17px 0 17px 17px;
  }
`;
