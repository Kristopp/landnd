import type { NextApiRequest, NextApiResponse } from "next";
import nearByData from "../../../data/nearByData.json";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json(nearByData);

  }
    catch (error) {
        res.status(500).json({ statusCode: 500, message: error });
    }
}