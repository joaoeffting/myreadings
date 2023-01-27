// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import type { BookType } from "../../types/book.type";

const BOOKS: BookType[] = [
  {
    name: "Carrie",
    author: "Stephen King",
    cover:
      "https://hodderscape.co.uk/wp-content/uploads/2013/10/Carrie-1981.png",
    description: "This is a great horror book",
    pages: 338,
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BookType[]>
) {
  const result = await prisma.book.findMany();
  res.status(200).json(result);
}
