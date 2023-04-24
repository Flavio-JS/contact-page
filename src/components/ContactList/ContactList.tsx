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

  function gerarCorHexAleatoria() {
    const corIndesejada = "#E1E1E6";
    const limiteDiferenca = 20;

    let cor = "";
    let diferencaRGB = 0;

    do {
      // Gerar um valor hexadecimal aleatório para cada componente RGB
      const red = Math.floor(Math.random() * 256)
        .toString(16)
        .padStart(2, "0");
      const green = Math.floor(Math.random() * 256)
        .toString(16)
        .padStart(2, "0");
      const blue = Math.floor(Math.random() * 256)
        .toString(16)
        .padStart(2, "0");

      cor = `#${red}${green}${blue}`;

      // Calcular a diferença entre cada componente RGB da cor gerada e a cor indesejada
      diferencaRGB =
        Math.abs(
          parseInt(cor.slice(1, 3), 16) -
            parseInt(corIndesejada.slice(1, 3), 16)
        ) +
        Math.abs(
          parseInt(cor.slice(3, 5), 16) -
            parseInt(corIndesejada.slice(3, 5), 16)
        ) +
        Math.abs(
          parseInt(cor.slice(5, 7), 16) -
            parseInt(corIndesejada.slice(5, 7), 16)
        );
    } while (diferencaRGB <= limiteDiferenca);

    return cor;
  }

  return (
    <S.ContactListWrapper>
      {initials.length > 0 && contactsData !== undefined && (
        <>
          {initials.map((initial) => (
            <S.ContactListLetterSection key={initial}>
              <S.ContactListLetter bgColor={gerarCorHexAleatoria()}>
                {initial}
              </S.ContactListLetter>
              <S.ContactListContacts>
                {contactsData
                  .filter((contact) => contact.name.startsWith(initial))
                  .map((contactData) => (
                    <PersonCard
                      key={`${contactData.name}${contactData.cell}`}
                      avatar={contactData.avatar}
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
