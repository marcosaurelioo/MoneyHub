import { useInfiniteQuery, QueryClient } from "react-query";
import type { CriptoCurrencyListTypes } from "@/entities";
import axios from "axios";

const queryClient = new QueryClient();

export function UseInfiniteCriptocurrecyList() {
  const { data, ...rest } = useInfiniteQuery<{
    data: CriptoCurrencyListTypes[];
  }>(
    ["UseInfiniteCriptocurrecyList"],
    ({ pageParam = 30 }) =>
      axios.get("/api/cryptocurrency-list", { params: { pageParam } }),
    {
      getNextPageParam: (lastPage) => {
        return lastPage?.data?.length + 10;
      },
      initialData: () => {
        return queryClient.getQueryData(["UseInfiniteCriptocurrecyList"]);
      },
      staleTime: 60 * 10000,
    }
  );

  const criptoCurrencyPage = data?.pages.flatMap((page) => page?.data) || [];

  return { ...rest, data: criptoCurrencyPage };
}
