import { NextPage } from "next";
import { Form } from "../components/Form/Form";
import { Input } from "../components/Input/Input";
import { Title } from "../components/Title/Title";

const HomePage: NextPage = () => {
  // eslint-disable-next-line no-console
  const onSubmit = (data: Record<string, unknown>) => console.log(data);

  return (
    <>
      <Title textTransform="capitalize">Página exemplo</Title>
      <br />
      <Form
        onSubmitFn={onSubmit}
        inputs={[
          <Input key="id" type="text" name="id" />,
          <Input key="password" type="password" name="senha" />,
        ]}
      />
    </>
  );
};

export default HomePage;
