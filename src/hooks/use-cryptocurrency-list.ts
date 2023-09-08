import { useInfiniteQuery } from "react-query";
import axios from "axios";

export function UseInfiniteCriptocurrecyList() {
  const { data, ...rest } = useInfiniteQuery(
    ["UseInfiniteCriptocurrecyList"],
    ({ pageParam = 30 }) =>
      axios.get("/api/cryptocurrency-list", { params: { pageParam } }),
    {
      getNextPageParam: (lastPage) => {
        return lastPage?.data?.length + 10;
      },
    }
  );

  const criptoCurrencyPage = data?.pages.flatMap((page) => page?.data) || [];

  return { ...rest, data: criptoCurrencyPage };
}
