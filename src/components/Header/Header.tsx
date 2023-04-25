import { AddIcon } from "../Icons/Add/Add";
import { PencilIcon } from "../Icons/Pencil/Pencil";
import { SearchIcon } from "../Icons/Search/Search";
import { TrashIcon } from "../Icons/Trash/Trash";
import { Title } from "../Title/Title";
import * as S from "./Header.styles";

interface IHeader {
  searchClick: () => void;
  addClick: () => void;
  editClick: () => void;
  deleteClick: () => void;
}

const Header = ({ addClick, editClick, searchClick, deleteClick }: IHeader) => {
  return (
    <S.HeaderWrapper>
      <S.HeaderNavBar>
        <Title>Meus contatos</Title>
        <S.HeaderNavBarIcons>
          <SearchIcon width={24} height={24} onClick={() => searchClick()} />
          <AddIcon width={24} height={24} onClick={() => addClick()} />
          <PencilIcon onClick={() => editClick()} />
          <TrashIcon onClick={() => deleteClick()} />
        </S.HeaderNavBarIcons>
      </S.HeaderNavBar>
    </S.HeaderWrapper>
  );
};

export { Header };
