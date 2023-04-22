import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    name: {
      type: "string",
    },
    label: {
      type: "string",
    },
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Componente Input",
      },
    },
  },
} as Meta<typeof Input>;

export const Default: StoryObj<typeof Input> = {};
