// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await prisma.book.create({
    data: {
      name: "Carrie",
      author: "Stephen King",
      cover:
        "https://hodderscape.co.uk/wp-content/uploads/2013/10/Carrie-1981.png",
      description: "This is a great horror book",
      pages: 338,
      genre: "Horror",
    },
  });
  res.status(200).json(result);
}
