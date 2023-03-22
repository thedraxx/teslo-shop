// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { db, seedDatabase } from "@/database";
import { Product, User } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === "production") {
    res.status(404).json({ name: "No tiene acceso a esta API" });
  }

  await db.connect();

  await Product.deleteMany();

  await User.insertMany(seedDatabase.initialData.users);

  await Product.deleteMany();

  await Product.insertMany(seedDatabase.initialData.products);

  await db.disconnect();

  res.status(200).json({ name: "Todo Salio bien" });
}
