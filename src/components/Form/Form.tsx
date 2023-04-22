import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { IInput, Input } from "../Input/Input";
import * as S from "./Form.styles";

interface IForm {
  inputs: IInput[];
  onSubmitFn: SubmitHandler<Record<string, unknown>>;
  gap?: number;
  width?: number;
  height?: number;
}

const Form = ({ inputs, onSubmitFn, gap, width, height }: IForm) => {
  const methods = useForm<Record<string, unknown>>();

  return (
    <S.FormWrapper
      gap={gap}
      onSubmit={methods.handleSubmit(onSubmitFn)}
      width={width}
      height={height}
    >
      <FormProvider {...methods}>
        {inputs.map((input) => (
          <Input
            key={input.name}
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
          />
        ))}
      </FormProvider>
    </S.FormWrapper>
  );
};

export { Form };
