import styled from "styled-components";
import {
  PersonCardInfo,
  PersonCardInfoName,
  PersonCardInfoNumber,
  PersonNoImg,
} from "../../PersonCard/PersonCard.styles";
import { AppSection, AppWrapper } from "../HomePage/HomePage.styles";

export const EditPageSection = styled(AppSection)``;

export const EditPageWrapper = styled(AppWrapper)`
  padding: 40px;
`;

export const EditPageContactInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 32px;
`;

export const EditPagePersonImg = styled.div`
  img {
    border-radius: 50%;
    min-width: 191px;
    min-height: 191px;

    background-color: red;

    :hover {
      cursor: pointer;
    }
  }
`;

export const EditPagePersonNoImg = styled(PersonNoImg)`
  min-width: 191px;
  min-height: 191px;
  font-size: 64px;

  :hover {
    cursor: pointer;
  }
`;

export const EditPagePersonInfo = styled(PersonCardInfo)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 100%;

  svg {
    :hover {
      cursor: pointer;
    }
  }
`;

export const EditPageInfoName = styled(PersonCardInfoName)`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  min-width: 350px;
`;

export const EditPageInfoNumber = styled(PersonCardInfoNumber)`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  width: 100%;
`;

export const EditPageFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 95px;
  min-width: 100%;
`;
