import { Meta, StoryObj } from "@storybook/react";
import { PersonCard } from "./PersonCard";

export default {
  title: "Components/PersonCard",
  component: PersonCard,
  argTypes: {
    name: {
      type: "string",
    },
    cell: {
      type: "string",
    },
    avatar: {
      type: "string",
    },
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Componente PersonCard",
      },
    },
  },
} as Meta<typeof PersonCard>;

export const Default: StoryObj<typeof PersonCard> = {
  args: {
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
    cell: "(11) 90876-1234",
    name: "Miss Angie Stewart",
  },
};
