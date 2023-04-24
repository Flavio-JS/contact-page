import styled, { css } from "styled-components";

interface IPersonCardWrapperProps {
  isClicked: boolean;
}

export const PersonCardWrapper = styled.div<IPersonCardWrapperProps>`
  ${({ isClicked }) => css`
    display: flex;
    justify-content: ${isClicked ? "center" : "left"};
    align-items: center;
    gap: 16px;
    width: 191px;
    height: auto;
  `}
`;

interface IPersonCardImgProps {
  isClicked: boolean;
  transitionTime: number;
}

export const PersonCardImg = styled.div<IPersonCardImgProps>`
  ${({ isClicked, transitionTime }) => css`
    width: ${isClicked ? "191px" : "48px"};
    height: ${isClicked ? "191px" : "48px"};
    font-size: ${isClicked ? "64px" : "16px"};
    transition: all ${transitionTime}ms;

    :hover {
      cursor: pointer;
    }
    img {
      border-radius: 50%;
      max-width: ${isClicked ? "191px" : "48px"};
      max-height: ${isClicked ? "191px" : "48px"};
      transition: all ${transitionTime}ms;
    }
  `}
`;

interface IPersonNoImg {
  avatarColor: string;
}
export const PersonNoImg = styled.div<IPersonNoImg>`
  ${({ avatarColor }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${avatarColor};
    width: 100%;
    height: 100%;
    border-radius: 50%;
  `}
`;

export const PersonCardInfo = styled.div`
  max-width: 127px;
`;

export const PersonCardInfoName = styled.div`
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const PersonCardInfoNumber = styled.div`
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #8c8cba;
`;
