import styled, { css } from "styled-components";

interface IInputWrapperProps {
  width?: number;
  height?: number;
  padding?: string;
  margin?: string;
}

export const InputWrapper = styled.div<IInputWrapperProps>`
  ${({ width, height, padding, margin }) => css`
    width: ${width ? `${width}px` : "min-width"};
    height: ${height ? `${height}px` : "min-height"};
    padding: ${padding ?? "0"};
    margin: ${margin ?? "0"};
    background-color: #24243d;

    input {
      width: 100%;
      height: 100%;
      outline: none;
      border: none;
      background-color: transparent;
    }
  `}
`;
