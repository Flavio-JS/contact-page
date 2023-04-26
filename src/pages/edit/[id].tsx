import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import nookies from "nookies";
import { useEffect, useState } from "react";
import { BaseButton } from "../../components/BaseButton/BaseButton";
import { IContact } from "../../components/ContactList/ContactList.types";
import { Form } from "../../components/Form/Form";
import { PencilIcon } from "../../components/Icons/Pencil/Pencil";
import * as S from "../../components/PageStyles/EditPage/EditPage.styles";
import { returnRandomBgColor } from "../../utils/ReturnRandomBgColor";

type EditPageProps = {
  contactsCookieData: IContact[];
};

const EditPage: NextPage<EditPageProps> = ({ contactsCookieData }) => {
  const router = useRouter();
  const { id } = router.query;

  const [contactData, setContactData] = useState(
    contactsCookieData.find((contato) => contato.id === Number(id))
  );

  const cookies = nookies.get();
  const [contactsCookie, setContactsCookie] = useState(contactsCookieData);
  useEffect(() => {
    setContactsCookie(JSON.parse(cookies.contatos) as IContact[]);
  }, [contactData]);

  const [isEditField, setIsEdit] = useState(false);

  const [editField, setEditField] = useState<"name" | "cell" | "avatar">(
    "name"
  );

  const onEditName = (data: Record<string, unknown>) => {
    const updatedContactsData: IContact[] = contactsCookie.map((contato) => {
      if (contato.id === Number(id)) {
        const updatedContactData: IContact = {
          ...contato,
          name: data.name as string,
        };
        setContactData(updatedContactData);
        return updatedContactData;
      }
      return contato;
    });

    nookies.set(null, "contatos", JSON.stringify(updatedContactsData));
    setIsEdit(false);
  };

  const onEditCell = (data: Record<string, unknown>) => {
    const updatedContactsData: IContact[] = contactsCookie.map((contato) => {
      if (contato.id === Number(id)) {
        const updatedContactData: IContact = {
          ...contato,
          cell: data.cell as string,
        };
        setContactData(updatedContactData);
        return updatedContactData;
      }
      return contato;
    });

    nookies.set(null, "contatos", JSON.stringify(updatedContactsData));
    setIsEdit(false);
  };

  const onEditAvatar = (data: Record<string, unknown>) => {
    const updatedContactsData: IContact[] = contactsCookie.map((contato) => {
      if (contato.id === Number(id)) {
        const updatedContactData: IContact = {
          ...contato,
          avatar: data.avatar as string,
        };
        setContactData(updatedContactData);
        return updatedContactData;
      }
      return contato;
    });

    nookies.set(null, "contatos", JSON.stringify(updatedContactsData));
    setIsEdit(false);
  };

  return (
    <S.EditPageSection>
      <S.EditPageWrapper>
        {(!contactData || !contactData.active) && <h1>Não encontrado</h1>}
        {contactData && contactData.active && (
          <S.EditPageContactInfos>
            <S.EditPagePersonImg
              onClick={() => {
                setEditField("avatar");
                setIsEdit(true);
              }}
            >
              {contactData.avatar !== "" && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  alt={`Avatar ${contactData.name}`}
                  src={contactData.avatar}
                  width={150}
                  height={150}
                />
              )}
              {contactData.avatar === "" && (
                <S.EditPagePersonNoImg
                  avatarColor={returnRandomBgColor(contactData.id)}
                >
                  {contactData.name.charAt(0)}
                </S.EditPagePersonNoImg>
              )}
            </S.EditPagePersonImg>
            <S.EditPagePersonInfo>
              <S.EditPageInfoName>
                {contactData.name}
                <PencilIcon
                  onClick={() => {
                    setEditField("name");
                    setIsEdit(true);
                  }}
                />
              </S.EditPageInfoName>
              <S.EditPageInfoNumber>
                {contactData.cell}
                <PencilIcon
                  onClick={() => {
                    setEditField("cell");
                    setIsEdit(true);
                  }}
                />
              </S.EditPageInfoNumber>
            </S.EditPagePersonInfo>

            <S.EditPageFormWrapper>
              {isEditField && (
                <>
                  {editField === "name" && (
                    <Form
                      onSubmitFn={onEditName}
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
                      ]}
                      customBtn={
                        <BaseButton variant="filled" color="#282843">
                          Salvar
                        </BaseButton>
                      }
                      width={350}
                    />
                  )}
                  {editField === "cell" && (
                    <Form
                      onSubmitFn={onEditCell}
                      inputs={[
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
                      ]}
                      customBtn={
                        <BaseButton variant="filled" color="#282843">
                          Salvar
                        </BaseButton>
                      }
                      width={350}
                    />
                  )}
                  {editField === "avatar" && (
                    <Form
                      onSubmitFn={onEditAvatar}
                      inputs={[
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
                </>
              )}
              {!isEditField && <Link href="/">VOLTAR PARA LISTA</Link>}
            </S.EditPageFormWrapper>
          </S.EditPageContactInfos>
        )}
      </S.EditPageWrapper>
    </S.EditPageSection>
  );
};

export default EditPage;

export const getServerSideProps: GetServerSideProps = async (
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
