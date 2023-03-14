import { IValidSizes, IValidTypes } from "./";

export interface iCartProduct {
  _id: string;
  images: string;
  inStock: number;
  price: number;
  size?: IValidSizes;
  slug: string;
  title: string;
  type: IValidTypes;
  gender: "men" | "women" | "kid" | "unisex";
  quantity: number;
}
