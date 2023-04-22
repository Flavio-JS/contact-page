import type { Decorator } from "@storybook/react";
import React from "react";
import { Asap } from "@next/font/google";

const asap = Asap({
  variable: "--asap",
  weight: "variable",
  display: "swap",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const withNextFont: Decorator = (Story, options) => {
  return (
    <>
      <style jsx global>{`
        :root {
          --asap: ${asap.style.fontFamily};
        }
      `}</style>
      <Story {...options} />
    </>
  );
};
