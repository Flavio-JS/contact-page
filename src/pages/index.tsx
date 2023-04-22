import { NextPage } from "next";
import { BaseButton } from "../components/BaseButton/BaseButton";
import { Form } from "../components/Form/Form";
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
          { type: "text", name: "id", padding: "10px" },
          { type: "password", name: "senha", padding: "10px" },
        ]}
      />
    </>
  );
};

export default HomePage;
