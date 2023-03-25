import jwt from "jsonwebtoken";

export const signToken = (_id: string, email: string) => {
  if (!process.env.JWT_SECRET_SEED) {
    throw new Error("JWT_SECRET must be defined");
  }

  return jwt.sign(
    // Payload
    { _id, email },

    // Seed
    process.env.JWT_SECRET_SEED,

    // Options
    { expiresIn: "1h" }
  );
};

export const isValidToken = (token: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      if (!process.env.JWT_SECRET_SEED) {
        throw new Error("JWT_SECRET must be defined");
      }

      jwt.verify(token, process.env.JWT_SECRET_SEED, (err, payload) => {
        if (err) {
          reject(err);
        }

        const { _id } = payload as { _id: string; email: string };

        resolve(_id);
      });
    } catch (error) {
      reject(error);
    }
  });
};
