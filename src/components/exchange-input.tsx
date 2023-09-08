import type { CriptoCurrencyListTypes } from "@/entities";
import { Swap } from "@/assets/swap";
import { useState } from "react";

export function ExchangeInputs({ data }: { data: CriptoCurrencyListTypes[] }) {
  const [secondSelectedCoin, setSecondSelectedCoin] = useState("ETH");
  const [firstSelectedCoin, setFirstSelectedCoin] = useState("BTC");
  const [coinValue, setCoinValue] = useState(1);

  const secondCoin = data.find((item) => item.symbol === secondSelectedCoin);
  const firstCoin = data.find((item) => item.symbol === firstSelectedCoin);

  const firstCoinPrice = Number(firstCoin?.quote?.USD?.price?.toFixed(2));
  const secondCoinPrice = Number(secondCoin?.quote?.USD?.price?.toFixed(2));

  const coinsPriceRatio = (
    (firstCoinPrice * coinValue) /
    secondCoinPrice
  ).toFixed(3);

  function switchCoins() {
    setFirstSelectedCoin(secondSelectedCoin);
    setSecondSelectedCoin(firstSelectedCoin);
  }

  return (
    <div className="my-10 w-full max-w-3xl">
      <h5 className="text-neutral-500 text-xs font-semibold">EXCHANGE</h5>

      <div className="w-full flex flex-wrap sm:flex-nowrap justify-between items-center gap-5">
        <div className="flex relative w-full">
          <input
            className="h-10 w-full font-normal border border-b rounded py-5 pr-20 pl-3"
            onChange={(e) => setCoinValue(Number(e.target.value))}
            defaultValue={coinValue}
          />

          <div className="flex absolute transform translate-y-1/2 right-1 -top-0.5">
            <div className="w-px h-6 bg-gray-400 mr-2" />

            <select
              onChange={(event) => setFirstSelectedCoin(event.target.value)}
              value={firstSelectedCoin}
            >
              {data.map((item) => (
                <option key={item.id}>{item.symbol}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-center w-full sm:w-auto">
          <Swap onClick={switchCoins} className="cursor-pointer" />
        </div>

        <div className="flex relative w-full">
          <input
            className="h-10 w-full font-normal border border-b rounded py-5 pr-20 pl-3"
            value={coinsPriceRatio}
            disabled
          />

          <div className="flex absolute transform translate-y-1/2 right-1 -top-0.5">
            <div className="w-px h-6 bg-gray-400 mr-2" />

            <select
              onChange={(event) => setSecondSelectedCoin(event.target.value)}
              value={secondSelectedCoin}
            >
              {data.slice(1).map((item) => (
                <option key={item.id}>{item.symbol}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
