import { Meta, StoryObj } from "@storybook/react";
import { SearchIcon } from "./Search";

export default {
  title: "Icons/SearchIcon",
  component: SearchIcon,
  argTypes: {
    height: {
      type: "number",
    },
    width: {
      type: "number",
    },
    color: {
      type: "string",
    },
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Componente PencilIcon",
      },
    },
  },
} as Meta<typeof SearchIcon>;

export const Default: StoryObj<typeof SearchIcon> = {};

export const ChangeColor: StoryObj<typeof SearchIcon> = {
  args: {
    color: "#ffa600",
  },
};

export const ChangeSize: StoryObj<typeof SearchIcon> = {
  args: {
    color: "#1900ff",
    width: 50,
    height: 50,
  },
};
