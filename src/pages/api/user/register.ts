import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/database";
import { User } from "@/models";
import bcrypt from "bcryptjs";
import { jwt, validations } from "@/utils";

type Data =
  | { message: string }
  | { token: string; user: { email: string; role: string; name: string } };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "POST":
      return registerUser(req, res);

    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}

const registerUser = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { email, password, name = "" } = req.body;

  await db.connect();
  const user = await User.findOne({ email });

  if (user) {
    db.disconnect();
    return res.status(400).json({ message: "user Already Registered" });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters long" });
  }

  if (name.length < 2) {
    return res
      .status(400)
      .json({ message: "Name must be at least 2 characters long" });
  }

  //   TODO: VALIDATE EMAIL\
  if (!validations.isValidEmail(email)) {
    return res.status(400).json({ message: "Email is not valid" });
  }

  const newUser = new User({
    email: email.toLowerCase(),
    password: bcrypt.hashSync(password, 10),
    role: "client",
    name: name.toLowerCase(),
  });

  try {
    await newUser.save({ validateBeforeSave: true });
    db.disconnect();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }

  const { _id } = newUser;

  const token = jwt.signToken(_id, email);

  return res.status(200).json({
    token, // token: token
    user: {
      email,
      role: "client",
      name,
    },
  });
};
