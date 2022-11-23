import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../../data/data.json";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(data);
}