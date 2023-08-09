import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import ReactPDF from "@react-pdf/renderer";
import MyDocument from "@/app/components/pdf/pdfDocumentComponent";
import { format } from "date-fns";





export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data } = await axios.get(req.query.url as string);
  // return data
  const currentDate = new Date();

  const threeHoursAgo = format( new Date(currentDate.getTime() - 3 * 60 * 60 * 1000), "dd/MM/yyyy HH:mm:ss");
  
  const pdfStream = await ReactPDF.renderToStream(<MyDocument datas={data} date={threeHoursAgo} />);

  res.setHeader('Content-Type', 'application/pdf');
  pdfStream.pipe(res);
  pdfStream.on('end', () => console.log('Done streaming, response sent.'));
}

