import { Meta, StoryObj } from "@storybook/react";
import { ContactList } from "./ContactList";

const contactsData = [
  {
    avatar: "https://avatars.githubusercontent.com/u/106037619?s=96&v=4",
    name: "Flávio Filho",
    cell: "(62)987654321",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
    name: "Emma Sippola",
    cell: "(62)987654321",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    name: "Brayden Stewart",
    cell: "(62)987654321",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
    name: "Storm Sorensen",
    cell: "(62)987654321",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Belinda Costa",
    cell: "(62)987654321",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/57.jpg",
    name: "Brayden Stewart",
    cell: "(62)987654321",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/27.jpg",
    name: "Prudêncio Alves",
    cell: "(62)987654321",
  },
];
export default {
  title: "Components/ContactList",
  component: ContactList,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Componente ContactList",
      },
    },
  },
} as Meta<typeof ContactList>;

export const Default: StoryObj<typeof ContactList> = {
  args: {
    contactsData,
  },
};
