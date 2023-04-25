import React, { ReactNode } from "react";
import {
  FormProvider,
  useForm,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";
import { IInput, Input } from "../Input/Input";
import * as S from "./Form.styles";

interface IForm {
  inputs: IInput[];
  onSubmitFn: SubmitHandler<Record<string, unknown>>;
  gap?: number;
  width?: number;
  height?: number;
  customBtn?: ReactNode;
}

const Form = ({ inputs, onSubmitFn, gap, width, height, customBtn }: IForm) => {
  const methods: UseFormReturn<Record<string, unknown>> =
    useForm<Record<string, unknown>>();
  const {
    formState: { errors },
  } = methods;

  return (
    <S.FormWrapper
      gap={gap}
      onSubmit={methods.handleSubmit(onSubmitFn)}
      width={width}
      height={height}
    >
      <FormProvider {...methods}>
        {inputs.map((input) => (
          <React.Fragment key={input.name}>
            <Input
              type={input.type}
              name={input.name}
              label={input.label}
              height={input.height}
              maxWidth={input.maxWidth}
              margin={input.margin}
              padding={input.padding}
              startIcon={input.startIcon}
              endIcon={input.endIcon}
              placeholder={input.placeholder}
              regex={input.regex}
              regexMessage={input.regexMessage}
            />
            {errors?.[input.name] && (
              <span role="alert">{input.regexMessage}</span>
            )}
          </React.Fragment>
        ))}
        {customBtn && customBtn}
      </FormProvider>
    </S.FormWrapper>
  );
};

export { Form };
