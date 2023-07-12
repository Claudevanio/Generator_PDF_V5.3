"use client";
import { useEffect, useState } from "react";
import PDFViewerComponent from "../components/pdf/pdfView";
import { useSearchParams } from "next/navigation";

export default function PDFViwer() {
  const [datas, setDatas] = useState({});
  const searchParams = useSearchParams();

  const hasDataToRenderPdf = Object.keys(datas).length > 0;

  useEffect(() => {
    // Recupere os dados do PDF da query string
    const data = searchParams!.get('data');

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
