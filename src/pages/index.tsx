import { GetServerSideProps, NextPage } from "next";
import nookies from "nookies";
import { useState } from "react";
import { ContactList } from "../components/ContactList/ContactList";
import { IContact } from "../components/ContactList/ContactList.types";
import { Header } from "../components/Header/Header";
import * as S from "../components/HomePage/index.styles";

type HomePageProps = {
  contactsCookieData: IContact[];
};

const HomePage: NextPage<HomePageProps> = ({ contactsCookieData }) => {
  let contactsCookie = contactsCookieData;
  const [headerState, setHeaderState] = useState<
    "search" | "add" | "edit" | "delete"
  >("search");
  const [contactsData, setContactsData] = useState<IContact[]>(contactsCookie);
  // eslint-disable-next-line no-console
  const onSearch = (data: Record<string, unknown>) => console.log(data);
  // eslint-disable-next-line no-console
  const onAdd = (data: Record<string, unknown>) => {
    const newContact = {
      avatar: data.avatar as string,
      name: data.name as string,
      cell: data.cell as string,
    };
    contactsCookie = JSON.parse(nookies.get().contatos) as IContact[];
    const newContactsData = [...contactsCookie, newContact];
    nookies.set(null, "contatos", JSON.stringify(newContactsData));
    setContactsData(newContactsData);
    setHeaderState("search");
  };

  const handleAddClick = () => setHeaderState("add");
  const handleEditClick = () => setHeaderState("edit");
  const handleDeleteClick = () => setHeaderState("delete");
  const handleSearchClick = () => setHeaderState("search");

  return (
    <S.AppSection>
      <Header
        onSearch={onSearch}
        onAdd={onAdd}
        addClick={handleAddClick}
        deleteClick={handleDeleteClick}
        editClick={handleEditClick}
        searchClick={handleSearchClick}
        state={headerState}
      />
      <ContactList contactsData={contactsData} />
    </S.AppSection>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (
  context
  // eslint-disable-next-line @typescript-eslint/require-await
) => {
  const cookies = nookies.get(context);
  const contactsStored = cookies.contatos;
  let contactsCookieData: IContact[] = [];

  if (contactsStored) {
    contactsCookieData = JSON.parse(contactsStored) as IContact[];
  } else {
    nookies.set(context, "contatos", JSON.stringify([]));
  }

  return {
    props: { contactsCookieData },
  };
};
