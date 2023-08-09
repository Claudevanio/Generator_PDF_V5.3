import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import ReactPDF, { PDFDownloadLink } from "@react-pdf/renderer";
import PDFViewerComponent from "@/app/components/pdf/pdfView";
import MyDocument from "@/app/components/pdf/pdfDocumentComponent";
import { format } from "date-fns";





export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data } = await axios.get(req.query.url as string);
  // return data
  const currentTime = format(new Date(), "dd/MM/yyyy HH:mm:ss");
  const pdfStream = await ReactPDF.renderToStream(<MyDocument datas={data} date={currentTime} />);

  res.setHeader('Content-Type', 'application/pdf');
  pdfStream.pipe(res);
  pdfStream.on('end', () => console.log('Done streaming, response sent.'));
}

/// /api/hello
