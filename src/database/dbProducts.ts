import { db } from "@/database";
import Product from "../models/Product";
import { ISeedProduct } from "@/interfaces";

export const getProductBySlug = async (
  slug: string
): Promise<ISeedProduct | null> => {
  await db.connect();

  const product = await Product.findOne({ slug: slug });

  await db.disconnect();

  if (!product) {
    return null;
  }

  return product;
};
