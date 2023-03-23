import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  src: any;
  textColor: string;
  text: string;
  className?: string;
}

const Button = ({ src, textColor, text, className }: Props) => {
  return (
    <div>
      <div className={`button-custom ${className}`}>
        <a href="" className="button-box">
          <img src={src.src} alt="" />
          <p className="text-button" style={{ color: textColor }}>
            {text}
          </p>
        </a>
      </div>
    </div>
  );
};

export default Button;
