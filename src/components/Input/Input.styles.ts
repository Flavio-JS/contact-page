import styled, { css } from "styled-components";

interface IInputWrapperProps {
  maxWidth?: number;
  height?: number;
  padding?: string;
  margin?: string;
}

export const InputWrapper = styled.div<IInputWrapperProps>`
  ${({ maxWidth, height, padding, margin }) => css`
    width: 100%;
    height: ${height ? `${height}px` : "min-height"};
    padding: ${padding ?? "0"};
    margin: ${margin ?? "0"};
    background-color: #24243d;
    border-radius: 5px;
    max-width: ${maxWidth ? `${maxWidth}px` : "100%"};

    input {
      width: 100%;
      height: 100%;
      outline: none;
      border: none;
      background-color: transparent;

      ::placeholder {
        color: #e1e1e6;
      }
    }
  `}
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #24243d;

  svg {
    :hover {
      cursor: pointer;
    }
  }
`;
