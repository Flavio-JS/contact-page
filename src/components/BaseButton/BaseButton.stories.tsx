import { Meta, StoryObj } from "@storybook/react";
import { ChevronLeftIcon } from "../Icons/ChevronLeftIcon";
import { BaseButton } from "./BaseButton";

export default {
  title: "Components/TrinusButton",
  component: BaseButton,
  argTypes: {
    height: {
      type: "number",
    },
    width: {
      type: "number",
    },
    onClick: {
      action: "clicked",
      type: "function",
    },
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Componente de botão",
      },
    },
  },
} as Meta<typeof BaseButton>;

export const Filled: StoryObj<typeof BaseButton> = {
  args: {
    variant: "filled",
    children: "Filled",
  },
};

export const Text: StoryObj<typeof BaseButton> = {
  args: {
    variant: "text",
    children: "Text",
  },
};

export const TextWithUnderline: StoryObj<typeof BaseButton> = {
  args: {
    variant: "textWithUnderline",
    children: "TextWithUnderline",
  },
};

export const Outlined: StoryObj<typeof BaseButton> = {
  args: {
    variant: "outlined",
    children: "Outlined",
  },
};

export const WithoutIcon: StoryObj<typeof BaseButton> = {
  args: {
    variant: "filled",
    children: "Sem Ícone",
  },
};

export const WithStartIcon: StoryObj<typeof BaseButton> = {
  args: {
    startIcon: <ChevronLeftIcon width={18} height={18} />,
    children: "Com ícone inicial",
  },
};

export const WithEndIcon: StoryObj<typeof BaseButton> = {
  args: {
    endIcon: <ChevronLeftIcon width={18} height={18} />,
    children: "Com ícone final",
  },
};

export const WithStartAndEndIcon: StoryObj<typeof BaseButton> = {
  args: {
    startIcon: <ChevronLeftIcon width={18} height={18} />,
    endIcon: <ChevronLeftIcon width={18} height={18} />,
    children: "Com os ícones",
  },
};
