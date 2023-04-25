import styled, { css } from "styled-components";

interface IFormWrapperProps {
  gap?: number;
  width?: number;
  height?: number;
}
export const FormWrapper = styled.form<IFormWrapperProps>`
  ${({ gap, width, height }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${width ? `${width}px` : "fit-content"};
    height: ${height ? `${height}px` : "fit-content"};
    gap: ${gap ? `${gap}px` : "16px"};

    button {
      :hover {
        cursor: pointer;
      }
    }

    span {
      font-size: 12px;
      color: red;
    }
  `}
`;
