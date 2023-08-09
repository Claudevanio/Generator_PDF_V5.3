"use client";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./pdfDocumentComponent";
import { format } from "date-fns";

function convertTZ(date: Date, tzString: string) {
  const options = { timeZone: tzString, timeZoneName: 'short' };
  const utcTime = date.getTime() + (date.getTimezoneOffset() * 60 * 1000);
  return new Date(utcTime).toLocaleString("pt-BR", options);
}


const PDFViewerComponent = ({ datas }: { datas: any }) => {
  return (
    <PDFViewer className="w-full h-full">
      <MyDocument datas={datas} date={
        convertTZ(currentDateTime, 'America/Sao_Paulo') }  />
    </PDFViewer>
  );
};

export default PDFViewerComponent;
