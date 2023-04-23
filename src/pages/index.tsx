import { NextPage } from "next";
import { Header } from "../components/Header/Header";
import { PersonCard } from "../components/PersonCard/PersonCard";
import * as S from "./index.styles";

const HomePage: NextPage = () => {
  // eslint-disable-next-line no-console
  const onSearch = (data: Record<string, unknown>) => console.log(data);

  const handleAddClick = () => console.log("add");
  const handleEditClick = () => console.log("edit");
  const handleDeleteClick = () => console.log("delete");

  return (
    <S.AppSection
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1E1E1E",
      }}
    >
      <Header
        onSearch={onSearch}
        addClick={handleAddClick}
        deleteClick={handleDeleteClick}
        editClick={handleEditClick}
      />
      <br />
      <PersonCard
        avatar="https://randomuser.me/api/portraits/women/50.jpg"
        cell="(11) 90876-1234"
        name="Miss Angie Stewart"
      />
    </S.AppSection>
  );
};

export default HomePage;
