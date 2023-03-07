import type { NextApiRequest, NextApiResponse } from "next";
import { db, SHOP_CONSTANTS } from "@/database";
import { Product } from "@/models";
import { ISeedProduct } from "@/interfaces";

type Data = {
  message: string;
  products?: ISeedProduct[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      // Handle GET request
      return getProducts(req, res);

    default:
      // Handle any other HTTP method
      return res.status(400).json({ message: "Method not allowed" });
  }
}

const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { gender = "all" } = req.query;

  let condition = {};

  if (gender !== "all" && SHOP_CONSTANTS.validGenders.includes(`${gender}`)) {
    condition = { gender };
  }

  // Get the data from your database
  await db.connect();

  const products = await Product.find(condition)
    .select("title images price inStock slug -_id")
    .lean();

  res.status(200).json({ message: "Success", products });

  await db.disconnect();

  throw new Error("Function not implemented.");
};
