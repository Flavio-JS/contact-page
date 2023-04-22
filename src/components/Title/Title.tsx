import * as S from "./Title.styles";

interface ITitle {
  fontWeight?: number;
  fontSize?: number;
  textTransform?: "capitalize" | "uppercase" | "lowercase";
  children: string;
}

const Title = ({ fontWeight, fontSize, textTransform, children }: ITitle) => {
  return (
    <S.Title
      fontWeight={fontWeight}
      fontSize={fontSize}
      textTransform={textTransform}
    >
      {children}
    </S.Title>
  );
};

export { Title };
