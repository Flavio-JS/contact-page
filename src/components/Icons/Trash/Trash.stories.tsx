import { Meta, StoryObj } from "@storybook/react";
import { TrashIcon } from "./Trash";

export default {
  title: "Icons/TrashIcon",
  component: TrashIcon,
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
        component: "Componente TrashIcon",
      },
    },
  },
} as Meta<typeof TrashIcon>;

export const Default: StoryObj<typeof TrashIcon> = {};

export const ChangeColor: StoryObj<typeof TrashIcon> = {
  args: {
    color: "#ffa600",
  },
};

export const ChangeSize: StoryObj<typeof TrashIcon> = {
  args: {
    color: "#1900ff",
    width: 50,
    height: 50,
  },
};
