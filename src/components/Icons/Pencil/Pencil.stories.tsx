import { Meta, StoryObj } from "@storybook/react";
import { PencilIcon } from "./Pencil";

export default {
  title: "Icons/PencilIcon",
  component: PencilIcon,
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
} as Meta<typeof PencilIcon>;

export const Default: StoryObj<typeof PencilIcon> = {};

export const ChangeColor: StoryObj<typeof PencilIcon> = {
  args: {
    color: "#ffa600",
  },
};

export const ChangeSize: StoryObj<typeof PencilIcon> = {
  args: {
    color: "#1900ff",
    width: 50,
    height: 50,
  },
};
