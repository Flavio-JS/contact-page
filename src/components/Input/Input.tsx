import React from "react";
import { useFormContext } from "react-hook-form";
import * as S from "./Input.styles";

export interface IInput {
  name: string;
  label?: string;
  width?: number;
  height?: number;
  padding?: string;
  margin?: string;
  placeholder?: string;
  type: React.HTMLInputTypeAttribute;
}

const Input = ({
  name,
  label,
  width,
  height,
  padding,
  margin,
  placeholder,
  type = "text",
  ...rest
}: IInput) => {
  const { register } = useFormContext();

  return (
    <S.InputWrapper
      width={width}
      height={height}
      padding={padding}
      margin={margin}
    >
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        {...register(name)}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </S.InputWrapper>
  );
};

export { Input };
