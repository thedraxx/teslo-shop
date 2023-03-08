import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/database";
import { Product } from "@/models";
import { ISeedProduct } from "@/interfaces";

type Data = { message: string } | { products: ISeedProduct[] };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      // do something
      return searchProducts(req, res);

    default:
      return res.status(400).json({ message: "Bad Request" });
  }
}

const searchProducts = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  let { q = "" } = req.query;

  if (q.length === 0) {
    return res
      .status(400)
      .json({ message: "debe de especificar el query de busqueda" });
  }

  q = q.toString().toLocaleLowerCase();

  await db.connect();

  //  Buscar productos por titulo y tags
  const products = await Product.find({
    $text: { $search: q },
  })
    .select("title image price slug -_id")
    .lean();

  await db.disconnect();

  return res.status(200).json({ products });
};
