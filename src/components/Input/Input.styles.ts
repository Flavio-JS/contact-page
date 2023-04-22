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
    border: 2px solid #890308;
    padding: ${padding ?? "0"};
    margin: ${margin ?? "0"};

    input {
      width: 100%;
      height: 100%;
    }
  `}
`;
