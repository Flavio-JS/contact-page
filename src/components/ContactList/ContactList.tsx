import { PersonCard } from "../PersonCard/PersonCard";
import * as S from "./ContactList.styles";
import { IContact } from "./ContactList.types";

interface IContactList {
  contactsData: IContact[] | undefined;
}

const ContactList = ({ contactsData }: IContactList) => {
  if (contactsData)
    contactsData.sort((a, b) =>
      a.name && b.name ? a.name.localeCompare(b.name) : 0
    );

  const initials = contactsData
    ? [
        ...new Set(
          contactsData
            .filter((contact) => contact.name)
            .map((contact) => contact.name.charAt(0))
        ),
      ]
    : [];

  function returnRandomBgColor(index: number) {
    const bgColor = [
      "#8C8CBA",
      "#0088B3",
      "#07847E",
      "#633BBC",
      "#9A00B3",
      "#B38C00",
    ];

    if (index > bgColor.length) {
      return bgColor[index % 6];
    }

    return bgColor[index];
  }

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
                  .map((contactData, contactIndex) => (
                    <PersonCard
                      key={`${contactData.name}${contactData.cell}`}
                      avatar={contactData.avatar}
                      avatarColor={returnRandomBgColor(contactIndex + 4)}
                      cell={contactData.cell}
                      name={contactData.name}
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
