// import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import * as S from "./PersonCard.styles";

interface IPersonCard {
  id: number;
  name: string;
  cell: string;
  avatar: string;
  avatarColor: string;
  editMode: boolean;
}

const PersonCard = ({
  id,
  name,
  cell,
  avatar,
  avatarColor,
  editMode,
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
          {!editMode && (
            <S.PersonCardInfo>
              <S.PersonCardInfoName>{name}</S.PersonCardInfoName>
              <S.PersonCardInfoNumber>{cell}</S.PersonCardInfoNumber>
            </S.PersonCardInfo>
          )}
          {editMode && (
            <Link href={`/edit/${id}`}>
              <S.PersonCardInfo editMode={editMode}>
                <S.PersonCardInfoName>{name}</S.PersonCardInfoName>
                <S.PersonCardInfoNumber>{cell}</S.PersonCardInfoNumber>
              </S.PersonCardInfo>
            </Link>
          )}
        </>
      )}
    </S.PersonCardWrapper>
  );
};

export { PersonCard };
