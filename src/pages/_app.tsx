import { QueryClientProvider, QueryClient } from "react-query";
import { Montserrat } from "next/font/google";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });
const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={montserrat.className}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </div>
  );
}
