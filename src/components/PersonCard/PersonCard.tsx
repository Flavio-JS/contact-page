import Image from "next/image";
import { useState } from "react";
import * as S from "./PersonCard.styles";

interface IPersonCard {
  name: string;
  cell: string;
  avatar: string;
}
// https://randomuser.me/api/ dados de user fake

const PersonCard = ({ name, cell, avatar }: IPersonCard) => {
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
        <Image
          alt={`Avatar ${name}`}
          src={avatar}
          layout="responsive"
          width={191}
          height={191}
        />
      </S.PersonCardImg>
      {!waitImg && (
        <S.PersonCardInfo>
          <S.PersonCardInfoName>{name}</S.PersonCardInfoName>
          <S.PersonCardInfoNumber>{cell}</S.PersonCardInfoNumber>
        </S.PersonCardInfo>
      )}
    </S.PersonCardWrapper>
  );
};

export { PersonCard };
