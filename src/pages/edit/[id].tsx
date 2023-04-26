import { NextPage } from "next";
import { useRouter } from "next/router";
import * as S from "../../components/PageStyles/index.styles";

const EditPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <S.AppSection>
      <S.AppWrapper>
        <h1>contato de id {id}</h1>
      </S.AppWrapper>
    </S.AppSection>
  );
};

export default EditPage;
