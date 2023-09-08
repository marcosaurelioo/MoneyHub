import type { NextApiRequest, NextApiResponse } from "next";
import { CriptoCurrencyListTypes } from "@/entities";
import { api } from "@/services/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const criptoListResponse = await api.get<{
      data: CriptoCurrencyListTypes[];
    }>("/v1/cryptocurrency/listings/latest", {
      params: {
        limit: Number(req.query?.pageParam),
      },
    });

    const criptoDetailsResponse = await api.get("/v2/cryptocurrency/info", {
      params: {
        id: criptoListResponse.data?.data?.map((item) => item?.id).join(","),
      },
    });

    const dataWithLogos = criptoListResponse.data?.data.map((item, index) => {
      return {
        ...item,
        logo: criptoDetailsResponse.data?.data?.[item?.id]?.logo,
      };
    });

    res.status(200).json(dataWithLogos);
  } catch (error) {
    res.status(500).json({ error });
  }
}
