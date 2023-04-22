import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { IInput, Input } from "../Input/Input";
import * as S from "./Form.styles";

interface IForm {
  inputs: IInput[];
  onSubmitFn: SubmitHandler<Record<string, unknown>>;
  submitBtn?: JSX.Element;
  gap?: number;
}

const Form = ({ inputs, onSubmitFn, submitBtn, gap }: IForm) => {
  const methods = useForm<Record<string, unknown>>();

  return (
    <S.FormWrapper gap={gap} onSubmit={methods.handleSubmit(onSubmitFn)}>
      <FormProvider {...methods}>
        {inputs.map((input) => (
          <Input
            key={input.name}
            type={input.type}
            name={input.name}
            label={input.label}
            height={input.height}
            width={input.width}
            margin={input.margin}
            padding={input.padding}
            placeholder={input.placeholder}
          />
        ))}
        {submitBtn ? submitBtn : <button>Enviar</button>}
      </FormProvider>
    </S.FormWrapper>
  );
};

export { Form };
