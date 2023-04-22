import { Roboto } from "@next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useState } from "react";
import { GlobalStyle } from "../styles/Global.styles";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const App = ({ Component, pageProps }: AppProps) => {
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
          --roboto: ${roboto.style.fontFamily};
        }
      `}</style>
      <GlobalStyle />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default App;
