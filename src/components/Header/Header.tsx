import { Form } from "../Form/Form";
import { AddIcon } from "../Icons/Add/Add";
import { PencilIcon } from "../Icons/Pencil/Pencil";
import { SearchIcon } from "../Icons/Search/Search";
import { TrashIcon } from "../Icons/Trash/Trash";
import { Title } from "../Title/Title";
import * as S from "./Header.styles";

interface IHeader {
  onSearch: (data: Record<string, unknown>) => void;
  addClick: () => void;
  editClick: () => void;
  deleteClick: () => void;
}

const Header = ({ onSearch, addClick, editClick, deleteClick }: IHeader) => {
  return (
    <S.HeaderWrapper>
      <S.HeaderNavBar>
        <Title>Meus contatos</Title>
        <S.HeaderNavBarIcons>
          <AddIcon onClick={() => addClick()} />
          <PencilIcon onClick={() => editClick()} />
          <TrashIcon onClick={() => deleteClick()} />
        </S.HeaderNavBarIcons>
      </S.HeaderNavBar>
      <Form
        onSubmitFn={onSearch}
        inputs={[
          {
            type: "text",
            name: "id",
            padding: "10px",
            maxWidth: 350,
            startIcon: <SearchIcon />,
            placeholder: "Busque por nome ou por dados de contato...",
          },
        ]}
        width={350}
      />
    </S.HeaderWrapper>
  );
};

export { Header };
