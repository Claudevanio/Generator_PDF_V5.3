import { NextApiRequest, NextApiResponse } from "next";
import data from "./data.json";

/// http://localhost:3000/api/
/// Endpoint para teste
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  debugger
  res.status(200).json(data);
}

