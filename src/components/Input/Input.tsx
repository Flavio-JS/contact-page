import React from "react";
import { useFormContext } from "react-hook-form";
import * as S from "./Input.styles";

interface IInput {
  name: string;
  label?: string;
  width?: number;
  height?: number;
  type: React.HTMLInputTypeAttribute;
}

const Input = ({
  name,
  label,
  width,
  height,
  type = "text",
  ...rest
}: IInput) => {
  const { register } = useFormContext();

  return (
    <S.InputWrapper width={width} height={height}>
      {label && <label htmlFor={name}>{label}</label>}
      <input id={name} {...register(name)} type={type} {...rest} />
    </S.InputWrapper>
  );
};

export { Input };
