"use client";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./pdfDocumentComponent";
import { format } from "date-fns";

const currentTime = format(new Date(), "dd/MM/yyyy HH:mm:ss");

const PDFViewerComponent = ({ datas }: { datas: any }) => {
  return (
    <PDFViewer className="w-full h-full">
      <MyDocument datas={datas} date={currentTime} />
    </PDFViewer>
  );
};

export default PDFViewerComponent;
