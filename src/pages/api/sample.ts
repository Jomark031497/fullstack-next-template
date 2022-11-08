import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@lib/prisma";

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const data = await prisma.user.findMany();
  return res.status(200).json(data);
}
