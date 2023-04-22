import React, { ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import * as S from "./Input.styles";

export interface IInput {
  name: string;
  label?: string;
  maxWidth?: number;
  height?: number;
  padding?: string;
  margin?: string;
  placeholder?: string;
  type: React.HTMLInputTypeAttribute;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const Input = ({
  name,
  label,
  maxWidth,
  height,
  padding,
  margin,
  placeholder,
  startIcon,
  endIcon,
  type = "text",
  ...rest
}: IInput) => {
  const { register } = useFormContext();

  return (
    <S.InputWrapper
      maxWidth={maxWidth}
      height={height}
      padding={padding}
      margin={margin}
    >
      {label && <label htmlFor={name}>{label}</label>}
      <S.InputContainer>
        {startIcon && startIcon}
        <input
          id={name}
          {...register(name)}
          type={type}
          placeholder={placeholder}
          autoComplete={type === "password" ? "new-password" : ""}
          {...rest}
        />
        {endIcon && endIcon}
      </S.InputContainer>
    </S.InputWrapper>
  );
};

export { Input };
