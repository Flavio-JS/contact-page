import { Plus_Jakarta_Sans } from "@next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useState } from "react";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--plus-jakarta-sans",
  weight: "variable",
  display: "swap",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 10,
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <style jsx global>{`
        :root {
          --plus-jakarta-sans: ${plusJakartaSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
