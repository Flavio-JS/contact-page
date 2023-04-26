import { GetServerSideProps, NextPage } from "next";
import nookies from "nookies";
import { useState } from "react";
import { ContactList } from "../components/ContactList/ContactList";
import { IContact } from "../components/ContactList/ContactList.types";
import { Header } from "../components/Header/Header";
import * as S from "../components/PageStyles/index.styles";
import { BaseButton } from "../components/BaseButton/BaseButton";
import { Form } from "../components/Form/Form";
import { SearchIcon } from "../components/Icons/Search/Search";
import { Title } from "../components/Title/Title";

type HomePageProps = {
  contactsCookieData: IContact[];
};

const HomePage: NextPage<HomePageProps> = ({ contactsCookieData }) => {
  const cookies = nookies.get();
  const [contactsCookie, setContactsCookie] = useState(contactsCookieData);
  const [contactsData, setContactsData] = useState<IContact[]>(contactsCookie);
  const [editMode, setEditMode] = useState(false);

  const [state, setState] = useState<"search" | "add" | "edit" | "delete">(
    "search"
  );

  const onSearch = (data: { search?: string }) => {
    const filteredContacts = contactsCookie.filter((contact) => {
      const searchTerm = data.search?.toString().toLowerCase();
      return contact.name?.startsWith(
        (searchTerm?.charAt(0) || "").toUpperCase() +
          (searchTerm?.slice(1) || "")
      );
    });
    setContactsData(filteredContacts);
  };

  const onAdd = (data: Record<string, unknown>) => {
    const newContact: IContact = {
      id: contactsCookie.length + 1,
      avatar: data.avatar as string,
      name: data.name as string,
      cell: data.cell as string,
      active: true,
    };
    setContactsCookie(JSON.parse(nookies.get().contatos) as IContact[]);
    const newContactsData = [...contactsCookie, newContact];
    nookies.set(null, "contatos", JSON.stringify(newContactsData));
    setContactsData(newContactsData);
    setState("search");
  };

  const handleAddClick = () => {
    setContactsCookie(JSON.parse(cookies.contatos) as IContact[]);
    setContactsData(contactsCookie);
    setState("add");
    setEditMode(false);
  };
  const handleEditClick = () => {
    setContactsCookie(JSON.parse(cookies.contatos) as IContact[]);
    setContactsData(contactsCookie);
    setEditMode(true);
    setState("edit");
  };
  const handleDeleteClick = () => {
    setContactsCookie(JSON.parse(cookies.contatos) as IContact[]);
    setContactsData(contactsCookie);
    setState("delete");
    setEditMode(false);
  };
  const handleSearchClick = () => {
    setContactsCookie(JSON.parse(cookies.contatos) as IContact[]);
    setContactsData(contactsCookie);
    setState("search");
    setEditMode(false);
  };

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
                  placeholder: "(99) 999999999",
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
          {state === "edit" && (
            <S.EditMessage>
              <Title fontSize={18}>Selecione o contato que deseja editar</Title>
            </S.EditMessage>
          )}
        </S.FormWrapper>

        <ContactList contactsData={contactsData} editMode={editMode} />
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
