import { UseInfiniteCriptocurrecyList } from "@/hooks/use-cryptocurrency-list";
import { InfiniteScroll } from "@/components/infinite-list";
import { ExchangeInputs } from "./exchange-input";
import { Loader } from "@/assets/loader";
import Image from "next/image";

export function CryptocoinList() {
  const {
    data: listData,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = UseInfiniteCriptocurrecyList();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full max-w-3xl">
      <ExchangeInputs data={listData} />

      <div>
        <h5 className="text-neutral-500 text-xs font-semibold">CRYPTO LIST</h5>

        <div className="grid grid-cols-[repeat(6,1fr)] border-b py-3">
          <div className="flex gap-7 w-52">
            <span className="text-neutral-500 text-sm font-semibold">#</span>
            <span className="text-neutral-500 text-sm font-semibold">Name</span>
          </div>

          <span className="text-neutral-500 text-sm font-semibold ml-1 justify-self-center">
            Price
          </span>
          <span className="text-neutral-500 text-sm font-semibold justify-self-center">1hr %</span>
          <span className="text-neutral-500 text-sm font-semibold justify-self-center">24hr %</span>
          <span className="text-neutral-500 text-sm font-semibold justify-self-center">7d %</span>
          <span className="text-neutral-500 text-sm font-semibold justify-self-center">30d %</span>
        </div>

        <div className="flex flex-col">
          {listData.map((data, i) => {
            const isLastItem = listData.length - 1 !== i;
            const formatedPrice = data?.quote?.USD?.price.toLocaleString(
              "en-US",
              {
                style: "currency",
                currency: "USD",
              }
            );

            const tradingVolume1Hour = data?.quote?.USD?.percent_change_1h;
            const tradingVolume24Hours = data?.quote?.USD?.percent_change_24h;
            const tradingVolume7Days = data?.quote?.USD?.percent_change_7d;
            const tradingVolume30Days = data?.quote?.USD?.percent_change_30d;

            return (
              <InfiniteScroll
                key={data.id}
                hasNext={hasNextPage}
                fetchMore={fetchNextPage}
              >
                <div
                  className={`grid grid-cols-[repeat(6,1fr)] items-center py-3 ${
                    isLastItem && "border-b"
                  }`}
                >
                  <div className="flex items-center gap-3 w-52">
                    <div>
                      <Image
                        src={data.logo}
                        alt="bitcon"
                        height={30}
                        width={30}
                      />
                    </div>

                    <div className="flex items-center gap-1">
                      <h2 className="font-semibold text-lg">
                        {data.name}

                        <span className="text-neutral-500 text-xs font-semibold ml-1">
                          {data.symbol}
                        </span>
                      </h2>
                    </div>
                  </div>

                  <span className="text-sm font-medium justify-self-center">
                    {formatedPrice}
                  </span>
                  <span
                    className={`text-sm font-medium justify-self-center ${
                      tradingVolume1Hour > 0 ? "text-positive" : "text-negative"
                    }`}
                  >
                    {tradingVolume1Hour.toFixed(2)} %
                  </span>
                  <span
                    className={`text-sm font-medium justify-self-center ${
                      tradingVolume24Hours > 0
                        ? "text-positive"
                        : "text-negative"
                    }`}
                  >
                    {tradingVolume24Hours.toFixed(2)} %
                  </span>
                  <span
                    className={`text-sm font-medium justify-self-center ${
                      tradingVolume7Days > 0 ? "text-positive" : "text-negative"
                    }`}
                  >
                    {tradingVolume7Days.toFixed(2)} %
                  </span>
                  <span
                    className={`text-sm font-medium justify-self-center ${
                      tradingVolume30Days > 0
                        ? "text-positive"
                        : "text-negative"
                    }`}
                  >
                    {tradingVolume30Days.toFixed(2)} %
                  </span>
                </div>
              </InfiniteScroll>
            );
          })}
        </div>
      </div>
    </div>
  );
}
