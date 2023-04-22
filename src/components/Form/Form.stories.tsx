import { Meta, StoryObj } from "@storybook/react";
import { Form } from "./Form";

export default {
  title: "Components/Form",
  component: Form,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Componente Form",
      },
    },
  },
} as Meta<typeof Form>;

export const Default: StoryObj<typeof Form> = {
  args: {
    inputs: [
      { type: "text", name: "id", placeholder: "text" },
      { type: "password", name: "password", placeholder: "password" },
    ],
  },
};
