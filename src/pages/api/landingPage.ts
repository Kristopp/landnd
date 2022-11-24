import type { NextApiRequest, NextApiResponse } from "next";
import path from 'path';
import { promises as fs } from 'fs';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const jsonDirectory = path.join(process.cwd(), 'json');
  //Read the json data file data.json
  const nearByData = await fs.readFile(jsonDirectory + '/nearByData.json', 'utf8');
  const popularPicks = await fs.readFile(jsonDirectory + '/popularPicks.json', 'utf8');

  try {
    res.status(200).json(nearByData);

  }
    catch (error) {
        res.status(500).json({ statusCode: 500, message: error });
    }
}