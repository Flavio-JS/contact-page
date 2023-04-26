import styled, { css } from "styled-components";

export const ContactListWrapper = styled.div`
  background-color: #1a1924;
  width: 100%;
  max-width: 430px;
  height: 100%;
  padding: 40px;
  gap: 52px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #1a1924;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #6b6a7c;
    border-radius: 6px;
    border: 3px solid #1a1924;
  }
`;

export const ContactListLetterSection = styled.div`
  display: flex;
  width: 100%;
  gap: 52px;
  margin-bottom: 52px;
`;

interface IContactListLetter {
  bgColor: string;
}
export const ContactListLetter = styled.div<IContactListLetter>`
  ${({ bgColor }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background-color: ${bgColor};
  `}
`;

export const ContactListContacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: auto;
`;
