"use client";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./pdfDocumentComponent";
import { format } from "date-fns";




const PDFViewerComponent = ({ datas }: { datas: any }) => {
  const currentDate = new Date();

  const threeHoursAgo = format( new Date(currentDate.getTime() - 3 * 60 * 60 * 1000), "dd/MM/yyyy HH:mm:ss");

  return (
    <PDFViewer className="w-full h-full">
      <MyDocument datas={datas} date={threeHoursAgo}  />
    </PDFViewer>
  );
};

export default PDFViewerComponent;
