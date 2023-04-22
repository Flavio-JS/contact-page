import styled, { css } from "styled-components";

interface IFormWrapperProps {
  gap?: number;
}
export const FormWrapper = styled.form<IFormWrapperProps>`
  ${({ gap }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
    gap: ${gap ? `${gap}px` : "16px"};

    button {
      width: 100%;
      border: none;
      padding: 8px;
      border-radius: 8px;
      background-color: #16151e;

      :hover {
        cursor: pointer;
      }
    }
  `}
`;
