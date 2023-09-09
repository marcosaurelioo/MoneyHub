import { QueryClientProvider, QueryClient } from "react-query";
import { Montserrat } from "next/font/google";
import type { AppProps } from "next/app";
import { Header } from "@/components/header";
import "@/styles/globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={montserrat.className}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Component {...pageProps} />
      </QueryClientProvider>
    </div>
  );
}
