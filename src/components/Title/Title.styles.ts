import styled, { css } from "styled-components";

interface ITitleProps {
  fontWeight?: number;
  fontSize?: number;
  textTransform?: "capitalize" | "uppercase" | "lowercase";
}

export const Title = styled.h1<ITitleProps>`
  ${({ fontWeight, fontSize, textTransform }) => css`
    font-weight: ${fontWeight ?? 700};
    font-size: ${fontSize ?? 20}px;
    text-transform: ${textTransform ?? "none"};

    :hover {
      cursor: default;
    }
  `}
`;
