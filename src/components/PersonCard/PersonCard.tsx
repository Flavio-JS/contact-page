import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import nookies from "nookies";
import * as S from "./PersonCard.styles";
import { IContact } from "../ContactList/ContactList.types";

interface IPersonCard {
  id: number;
  name: string;
  cell: string;
  avatar: string;
  avatarColor: string;
  editMode: boolean;
  deleteMode: boolean;
  contactsData: IContact[];
  setContactsData: Dispatch<SetStateAction<IContact[]>>;
  setDeleteMode: Dispatch<SetStateAction<boolean>>;
}

const PersonCard = ({
  id,
  name,
  cell,
  avatar,
  avatarColor,
  editMode,
  deleteMode,
  contactsData,
  setContactsData,
  setDeleteMode,
}: IPersonCard) => {
  const [isClicked, setIsClicked] = useState(false);
  const [waitImg, setWaitImg] = useState(false);
  const transition = 500;

  const handleClick = (clicked: boolean) => {
    setIsClicked(!clicked);
    if (clicked === false) {
      setWaitImg(true);
    }
    if (clicked === true) {
      setTimeout(() => {
        setWaitImg(false);
      }, transition);
    }
  };

  const [contactData, setContactData] = useState<IContact | undefined>(
    contactsData.find((contato) => contato.id === Number(id))
  );
  useEffect(() => {
    setDeleteMode(false);
  }, [contactData]);

  const onDelet = () => {
    const updatedContactsData: IContact[] = contactsData.filter((contato) => {
      return contato.id !== Number(id);
    });

    setContactData(undefined);
    setContactsData(updatedContactsData);
    nookies.set(null, "contatos", JSON.stringify(updatedContactsData));
  };

  return (
    <S.PersonCardWrapper isClicked={isClicked}>
      <S.PersonCardImg
        onClick={() => handleClick(isClicked)}
        isClicked={isClicked}
        transitionTime={transition}
      >
        {avatar !== "" && (
          // eslint-disable-next-line @next/next/no-img-element
          <img alt={`Avatar ${name}`} src={avatar} width={191} height={191} />
        )}
        {avatar === "" && (
          <S.PersonNoImg avatarColor={avatarColor}>
            {name.charAt(0)}
          </S.PersonNoImg>
        )}
      </S.PersonCardImg>
      {!waitImg && (
        <>
          {!editMode && !deleteMode && (
            <S.PersonCardInfo>
              <S.PersonCardInfoName>{name}</S.PersonCardInfoName>
              <S.PersonCardInfoNumber>{cell}</S.PersonCardInfoNumber>
            </S.PersonCardInfo>
          )}
          {editMode && (
            <Link href={`/edit/${id}`}>
              <S.PersonCardInfo hoverMode={editMode}>
                <S.PersonCardInfoName>{name}</S.PersonCardInfoName>
                <S.PersonCardInfoNumber>{cell}</S.PersonCardInfoNumber>
              </S.PersonCardInfo>
            </Link>
          )}
          {deleteMode && (
            <S.PersonCardInfo hoverMode={deleteMode} onClick={() => onDelet()}>
              <S.PersonCardInfoName>{name}</S.PersonCardInfoName>
              <S.PersonCardInfoNumber>{cell}</S.PersonCardInfoNumber>
            </S.PersonCardInfo>
          )}
        </>
      )}
    </S.PersonCardWrapper>
  );
};

export { PersonCard };
