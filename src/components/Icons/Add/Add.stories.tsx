import { Meta, StoryObj } from "@storybook/react";
import { AddIcon } from "./Add";

export default {
  title: "Icons/AddIcon",
  component: AddIcon,
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
        component: "Componente AddIcon",
      },
    },
  },
} as Meta<typeof AddIcon>;

export const Default: StoryObj<typeof AddIcon> = {};

export const ChangeColor: StoryObj<typeof AddIcon> = {
  args: {
    color: "#ffa600",
  },
};

export const ChangeSize: StoryObj<typeof AddIcon> = {
  args: {
    color: "#1900ff",
    width: 50,
    height: 50,
  },
};
