import { NextPage } from "next";
import { Header } from "../components/Header/Header";
import { PersonCard } from "../components/PersonCard/PersonCard";
import * as S from "../components/HomePage/index.styles";

const HomePage: NextPage = () => {
  // eslint-disable-next-line no-console
  const onSearch = (data: Record<string, unknown>) => console.log(data);
  // eslint-disable-next-line no-console
  const handleAddClick = () => console.log("add");
  // eslint-disable-next-line no-console
  const handleEditClick = () => console.log("edit");
  // eslint-disable-next-line no-console
  const handleDeleteClick = () => console.log("delete");

  return (
    <S.AppSection>
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
