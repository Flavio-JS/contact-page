import { Dispatch, SetStateAction } from "react";
import { returnRandomBgColor } from "../../utils/ReturnRandomBgColor";
import { PersonCard } from "../PersonCard/PersonCard";
import * as S from "./ContactList.styles";
import { IContact } from "./ContactList.types";

interface IContactList {
  contactsData: IContact[] | undefined;
  editMode: boolean;
  deleteMode: boolean;
  contactsCookie: IContact[];
  setContactsCookie: Dispatch<SetStateAction<IContact[]>>;
  setDeleteMode: Dispatch<SetStateAction<boolean>>;
}

const ContactList = ({
  contactsData,
  editMode,
  deleteMode,
  contactsCookie,
  setContactsCookie,
  setDeleteMode,
}: IContactList) => {
  if (contactsData)
    contactsData.sort((a, b) =>
      a.name && b.name ? a.name.localeCompare(b.name) : 0
    );

  const initials = contactsData?.filter((contact) => contact.active === true)
    ? [
        ...new Set(
          contactsData
            .filter((contact) => contact.name)
            .filter((contact) => contact.active !== false)
            .map((contact) => contact.name.charAt(0))
        ),
      ]
    : [];

  return (
    <S.ContactListWrapper>
      {initials.length > 0 && contactsData !== undefined && (
        <>
          {initials.map((initial, index) => (
            <S.ContactListLetterSection key={initial}>
              <S.ContactListLetter bgColor={returnRandomBgColor(index)}>
                {initial}
              </S.ContactListLetter>
              <S.ContactListContacts>
                {contactsData
                  .filter((contact) => contact.name.startsWith(initial))
                  .filter((contact) => contact.active !== false)
                  .map((contactData, contactIndex) => (
                    <PersonCard
                      key={contactData?.id}
                      id={contactData.id}
                      avatar={contactData.avatar}
                      avatarColor={returnRandomBgColor(contactIndex + 4)}
                      cell={contactData.cell}
                      name={contactData.name}
                      editMode={editMode}
                      deleteMode={deleteMode}
                      contactsCookie={contactsCookie}
                      setContactsCookie={setContactsCookie}
                      setDeleteMode={setDeleteMode}
                    />
                  ))}
              </S.ContactListContacts>
            </S.ContactListLetterSection>
          ))}
        </>
      )}
    </S.ContactListWrapper>
  );
};

export { ContactList };
