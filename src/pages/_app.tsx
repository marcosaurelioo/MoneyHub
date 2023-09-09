import { QueryClientProvider, QueryClient } from "react-query";
import { Analytics } from "@vercel/analytics/react";
import { Montserrat } from "next/font/google";
import { Header } from "@/components/header";
import type { AppProps } from "next/app";
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

      <Analytics />
    </div>
  );
}
