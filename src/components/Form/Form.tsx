import React from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import * as S from "./Form.styles";

interface IForm {
  inputs: JSX.Element[];
  onSubmitFn: SubmitHandler<Record<string, unknown>>;
}

const Form = ({ inputs, onSubmitFn }: IForm) => {
  const methods = useForm<Record<string, unknown>>();

  return (
    <S.FormWrapper onSubmit={methods.handleSubmit(onSubmitFn)}>
      <FormProvider {...methods}>
        {inputs.map((input, index) => (
          <React.Fragment key={input.props.name ?? index}>
            {React.cloneElement(input, {
              errors: methods.formState.errors,
              register: methods.register,
            })}
          </React.Fragment>
        ))}
        <button type="submit">ok</button>
      </FormProvider>
    </S.FormWrapper>
  );
};

export { Form };
