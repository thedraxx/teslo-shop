import type { NextApiRequest, NextApiResponse } from "next";
import { db, SHOP_CONSTANTS } from "@/database";
import { Product } from "@/models";
import { ISeedProduct } from "@/interfaces";

type Data = {
  message: string;
  product?: ISeedProduct;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      // Handle GET request
      return getSlug(req, res);

    default:
      // Handle any other HTTP method
      return res.status(400).json({ message: "Method not allowed" });
  }
}

const getSlug = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { slug = "kids_cyberquad_bomber_jacket" } = req.query;

  // Get the data from your database
  await db.connect();

  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  return res.status(200).json({ message: "Success", product });
};
