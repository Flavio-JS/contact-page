import styled from "styled-components";

export const AppSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #1e1e1e;
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 430px;
  height: 100%;
  max-height: 629px;
  background-color: #16151e;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  form {
    margin-bottom: 40px;
  }
`;
