import { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

// eslint-disable-next-line no-console
const handleAddClick = () => console.log("add");
// eslint-disable-next-line no-console
const handleEditClick = () => console.log("edit");
// eslint-disable-next-line no-console
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
  },
};
