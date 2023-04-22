import styled, { css } from "styled-components";

interface IBaseStepsWrapperProps {
  vertical: boolean;
}
export const BaseStepsWrapper = styled.div<IBaseStepsWrapperProps>`
  ${({ vertical }) => css`
    display: flex;
    flex-direction: ${vertical ? "column" : "row"};
    justify-content: center;
    align-items: center;
    width: fit-content;

    div {
      flex-direction: ${vertical ? "column" : "row"};
    }
  `}
`;

interface IBaseStepNumberCircleProps {
  currentStep: number;
  stepKey: number;
}
export const BaseStepNumberCircle = styled.div<IBaseStepNumberCircleProps>`
  ${({ currentStep, stepKey }) => css`
    background-color: ${stepKey <= currentStep ? "#1A3EB5" : "#fff"};
    color: ${stepKey <= currentStep ? "#fff" : "#1A3EB5"};
    border-radius: 50%;
    border: solid 1px "#1A3EB5";
    width: 26px;
    height: 26px;
    font-size: "0.75rem";
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      cursor: default;
    }
  `}
`;

interface ISplitBarProps {
  vertical: boolean;
}
export const SplitBar = styled.div<ISplitBarProps>`
  ${({ vertical }) => css`
    height: ${vertical ? "22px" : "1px"};
    width: ${vertical ? "1px" : "22px"};
    background-color: "#1A3EB5";
  `}
`;
