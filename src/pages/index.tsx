import { CryptocoinList } from "@/components/crypto-coins-list";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center flex-col w-full p-5">
        <CryptocoinList />
      </div>
    </div>
  );
}
