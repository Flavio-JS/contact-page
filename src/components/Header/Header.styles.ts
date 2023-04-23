import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #16151e;
  width: 100%;
  max-width: 430px;
  padding: 40px;
  gap: 24px;
`;

export const HeaderNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderNavBarIcons = styled.div`
  display: flex;
  gap: 16px;

  svg {
    :hover {
      cursor: pointer;
      filter: drop-shadow(0px 0px 4px rgba(255, 255, 255, 0.25));
    }
  }
`;
