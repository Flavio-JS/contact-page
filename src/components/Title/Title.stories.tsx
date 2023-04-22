import { Meta, StoryObj } from "@storybook/react";
import { Title } from "./Title";

export default {
  title: "Components/Title",
  component: Title,
  argTypes: {
    fontWeight: {
      type: "number",
    },
    fontSize: {
      type: "number",
    },
    textTransform: {
      type: "string",
    },
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Componente Title",
      },
    },
  },
} as Meta<typeof Title>;

export const Default: StoryObj<typeof Title> = {
  args: {
    children: "Default",
  },
};

export const ChangeSize: StoryObj<typeof Title> = {
  args: {
    children: "Change Size",
    fontSize: 32,
  },
};

export const ChangeWeight: StoryObj<typeof Title> = {
  args: {
    children: "Change Weight",
    fontSize: 32,
    fontWeight: 100,
  },
};

export const TextTransformUppercase: StoryObj<typeof Title> = {
  args: {
    children: "text Transform Uppercase",
    fontSize: 32,
    fontWeight: 100,
    textTransform: "uppercase",
  },
};

export const TextTransformCapitalize: StoryObj<typeof Title> = {
  args: {
    children: "text Transform Capitalize",
    fontSize: 32,
    fontWeight: 100,
    textTransform: "capitalize",
  },
};

export const TextTransformLowercase: StoryObj<typeof Title> = {
  args: {
    children: "text Transform Lowercase",
    fontSize: 32,
    fontWeight: 100,
    textTransform: "lowercase",
  },
};
