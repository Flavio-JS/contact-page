import { GetServerSideProps, NextPage } from "next";
import nookies from "nookies";
import { useState } from "react";
import { ContactList } from "../components/ContactList/ContactList";
import { IContact } from "../components/ContactList/ContactList.types";
import { Header } from "../components/Header/Header";
import * as S from "../components/HomePage/index.styles";
import { BaseButton } from "../components/BaseButton/BaseButton";
import { Form } from "../components/Form/Form";
import { SearchIcon } from "../components/Icons/Search/Search";

type HomePageProps = {
  contactsCookieData: IContact[];
};

const HomePage: NextPage<HomePageProps> = ({ contactsCookieData }) => {
  let contactsCookie = contactsCookieData;
  const [state, setState] = useState<"search" | "add" | "edit" | "delete">(
    "search"
  );
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
    setState("search");
  };

  const handleAddClick = () => setState("add");
  const handleEditClick = () => setState("edit");
  const handleDeleteClick = () => setState("delete");
  const handleSearchClick = () => setState("search");

  return (
    <S.AppSection>
      <S.AppWrapper>
        <Header
          addClick={handleAddClick}
          deleteClick={handleDeleteClick}
          editClick={handleEditClick}
          searchClick={handleSearchClick}
        />
        <S.FormWrapper>
          {state === "search" && (
            <Form
              onSubmitFn={onSearch}
              inputs={[
                {
                  type: "text",
                  name: "search",
                  padding: "10px",
                  maxWidth: 350,
                  startIcon: (
                    <BaseButton variant="text" startIcon={<SearchIcon />} />
                  ),
                  placeholder: "Busque por nome ou por dados de contato...",
                },
              ]}
              width={350}
            />
          )}
          {state === "add" && (
            <Form
              onSubmitFn={onAdd}
              inputs={[
                {
                  type: "text",
                  name: "name",
                  padding: "10px",
                  maxWidth: 350,
                  placeholder: "Nome do amiguinho",
                  regex: /^[A-Z].{1,}$/,
                  regexMessage: "min 2 caracteres, 1º maiúscula",
                },
                {
                  type: "text",
                  name: "cell",
                  padding: "10px",
                  maxWidth: 350,
                  placeholder: "(99)999999999",
                  regex: /^\(\d{2}\)\s\d{9}$/,
                  regexMessage:
                    "Digite um número de celular válido no formato (99) 999999999",
                },
                {
                  type: "text",
                  name: "avatar",
                  padding: "10px",
                  maxWidth: 350,
                  placeholder: "url da imagem",
                  regex:
                    /^((http|https):\/\/)?([a-z0-9]+\.)?[a-z0-9]+\.[a-z]+(\/[^\s]*)?$/,
                  regexMessage: "Digite uma URL ou deixe em branco",
                },
              ]}
              customBtn={
                <BaseButton variant="filled" color="#282843">
                  Salvar
                </BaseButton>
              }
              width={350}
            />
          )}
        </S.FormWrapper>

        <ContactList contactsData={contactsData} />
      </S.AppWrapper>
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
