import React, { ReactNode } from "react";
import { ValidationRule, useFormContext } from "react-hook-form";
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
  regex?: ValidationRule<RegExp>;
  regexMessage?: string;
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
  regex,
  regexMessage,
  ...rest
}: IInput) => {
  const { register } = useFormContext();

  const regexOptions = {
    pattern: regex,
    message: regexMessage,
  };

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
          {...register(name, regexOptions)}
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
