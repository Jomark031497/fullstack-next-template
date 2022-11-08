import { nextAuthOptions } from "@common/nextAuthOptions";
import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";

export const getServerAuthSession = async (req: NextApiRequest, res: NextApiResponse) => {
  return await unstable_getServerSession(req, res, nextAuthOptions);
};
