import { NextPage } from "next";
import { Form } from "../components/Form/Form";
import { SearchIcon } from "../components/Icons/Search/Search";
import { PersonCard } from "../components/PersonCard/PersonCard";
import { Title } from "../components/Title/Title";

const HomePage: NextPage = () => {
  // eslint-disable-next-line no-console
  const onSubmit = (data: Record<string, unknown>) => console.log(data);

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#16151e",
      }}
    >
      <Title textTransform="capitalize">Meus Contatos</Title>
      <br />
      <Form
        onSubmitFn={onSubmit}
        inputs={[
          {
            type: "text",
            name: "id",
            padding: "10px",
            maxWidth: 350,
            startIcon: <SearchIcon />,
            placeholder: "Busque por nome ou por dados de contato...",
          },
        ]}
        width={350}
      />
      <br />
      <PersonCard
        avatar="https://randomuser.me/api/portraits/women/50.jpg"
        cell="(11) 90876-1234"
        name="Miss Angie Stewart"
      />
    </section>
  );
};

export default HomePage;
