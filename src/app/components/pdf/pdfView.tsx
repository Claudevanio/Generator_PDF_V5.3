"use client";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./pdfDocumentComponent";
import { format } from "date-fns";

function convertTZ(date:Date, tzString:string) {
  return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
}


const PDFViewerComponent = ({ datas }: { datas: any }) => {
  return (
    <PDFViewer className="w-full h-full">
      <MyDocument datas={datas} date={
        convertTZ(new Date(), 'America/Sao_Paulo').toLocaleString("pt-br") }  />
    </PDFViewer>
  );
};

export default PDFViewerComponent;
