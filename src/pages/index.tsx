import { GetServerSideProps, NextPage } from "next";
import nookies from "nookies";
import { ContactList } from "../components/ContactList/ContactList";
import { IContact } from "../components/ContactList/ContactList.types";
import { Header } from "../components/Header/Header";
import * as S from "../components/HomePage/index.styles";

type HomePageProps = {
  contactsData: IContact[];
};

const HomePage: NextPage<HomePageProps> = ({ contactsData }) => {
  // eslint-disable-next-line no-console
  const onSearch = (data: Record<string, unknown>) => console.log(data);
  // eslint-disable-next-line no-console
  const handleAddClick = () => {
    const newContact = {
      avatar: "https://avatars.githubusercontent.com/u/106037619?s=96&v=4",
      name: "Flávio Filho",
      cell: "(62)987654321",
    };
    const newContactsData = [...contactsData, newContact];
    nookies.set(null, "contatos", JSON.stringify(newContactsData));
  };
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
  let contactsData: IContact[] = [];

  if (contactsStored) {
    contactsData = JSON.parse(contactsStored) as IContact[];
    contactsData.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    nookies.set(context, "contatos", JSON.stringify([]));
  }

  return {
    props: { contactsData },
  };
};
