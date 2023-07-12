"use client";
import { useEffect, useState } from "react";
import PDFViewerComponent from "../components/pdf/pdfView";

export default function PDFViwer({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const [datas, setDatas] = useState({});

  const hasDataToRenderPdf = Object.keys(datas).length > 0;

  useEffect(() => {
    // Recupere os dados do PDF da query string
    const data = searchParams['data'];

    // Renderize o PDF em tela cheia
    if (data) {
      const pdfData = JSON.parse(data);
      // Use os dados do PDF para renderizar o PDF em tela cheia aqui
      setDatas(pdfData);
    }

    console.log('Entrei no useEffect')
  }, []);

  return (
    <div className="w-full h-screen">
      {hasDataToRenderPdf && (
        <PDFViewerComponent datas={datas}></PDFViewerComponent>
      )}
    </div>
  );
}
