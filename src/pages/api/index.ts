import { NextApiRequest, NextApiResponse } from "next";
import data from "./data.json";

/// /api/
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  debugger
  res.status(200).json(data);
}

