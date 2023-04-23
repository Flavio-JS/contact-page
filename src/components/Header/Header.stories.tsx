import { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const onSearch = (data: Record<string, unknown>) => console.log(data);

const handleAddClick = () => console.log("add");
const handleEditClick = () => console.log("edit");
const handleDeleteClick = () => console.log("delete");

export default {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Componente Header",
      },
    },
  },
} as Meta<typeof Header>;

export const Default: StoryObj<typeof Header> = {
  args: {
    addClick: handleAddClick,
    deleteClick: handleEditClick,
    editClick: handleDeleteClick,
    onSearch,
  },
};
