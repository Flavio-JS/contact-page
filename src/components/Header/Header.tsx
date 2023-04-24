import { BaseButton } from "../BaseButton/BaseButton";
import { Form } from "../Form/Form";
import { AddIcon } from "../Icons/Add/Add";
import { PencilIcon } from "../Icons/Pencil/Pencil";
import { SearchIcon } from "../Icons/Search/Search";
import { TrashIcon } from "../Icons/Trash/Trash";
import { Title } from "../Title/Title";
import * as S from "./Header.styles";

interface IHeader {
  onSearch: (data: Record<string, unknown>) => void;
  onAdd: (data: Record<string, unknown>) => void;
  searchClick: () => void;
  addClick: () => void;
  editClick: () => void;
  deleteClick: () => void;
  state: "search" | "add" | "edit" | "delete";
}

const Header = ({
  onSearch,
  onAdd,
  addClick,
  editClick,
  searchClick,
  deleteClick,
  state = "search",
}: IHeader) => {
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
      {state === "search" && (
        <Form
          onSubmitFn={onSearch}
          inputs={[
            {
              type: "text",
              name: "search",
              padding: "10px",
              maxWidth: 350,
              startIcon: (
                <BaseButton variant="text" startIcon={<SearchIcon />} />
              ),
              placeholder: "Busque por nome ou por dados de contato...",
            },
          ]}
          width={350}
        />
      )}
      {state === "add" && (
        <Form
          onSubmitFn={onAdd}
          inputs={[
            {
              type: "text",
              name: "name",
              padding: "10px",
              maxWidth: 350,
              placeholder: "Nome do amiguinho",
            },
            {
              type: "text",
              name: "cell",
              padding: "10px",
              maxWidth: 350,
              placeholder: "(99)999999999",
            },
            {
              type: "text",
              name: "avatar",
              padding: "10px",
              maxWidth: 350,
              placeholder: "link da imagem (em branco para não ter avatar)",
            },
          ]}
          customBtn={
            <BaseButton variant="filled" color="#282843">
              Salvar
            </BaseButton>
          }
          width={350}
        />
      )}
    </S.HeaderWrapper>
  );
};

export { Header };
