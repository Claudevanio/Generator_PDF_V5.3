"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import InputRequestComponent from "../components/inputRequest/inputRequest";

export default function HomeSearch({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [url, setUrl] = useState("");
  const [datas, setDatas] = useState({});
  const [error, setError] = useState("");

  const hasDataToRenderPdf = Object.keys(datas).length > 0;

  const handleRequest = async (url: string): Promise<any> => {
    try {
      const res = await axios.get(`/api/requestXMLHttp?url=${url}`);
      setDatas(res.data);
    } catch (error) {
      console.error("Ocorreu um erro ao fazer a requisição:", error);
      setError("Erro ao fazer a requisição");
    }
  };

  const handleChangeInput = (value: string) => {
    setUrl(value);
    setError("");
  };

  const openPdfInNewTab = () => {
    const dataQueryString = new URLSearchParams({
      data: JSON.stringify(datas),
    }).toString();
    const url = `/pdf-viewer?${dataQueryString}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    if (hasDataToRenderPdf) {
      openPdfInNewTab();
    }
  }, [datas]);

  return (
    <>
      <div className="flex flex-col h-screen items-center  justify-center">
        <div className="flex rounded-md w-2/4 h-2/4 bg-neutral-500 items-center justify-center ">
          <div>
            <h1 className="text-4xl text-zinc-300 text-center mt-5 mb-10">
              Gerador de PDF
            </h1>
            <div className="border-4 border-zinc-300 rounded-lg mb-20 p-4">
              <InputRequestComponent
                url={url}
                onChange={handleChangeInput}
              ></InputRequestComponent>
              <button
                dir="rtl"
                className="  p-2 rounded-s-lg bg-red-700  "
                onClick={() => handleRequest(url)}
              >
                Gerar PDF
              </button>
              {error && <p className="text-red-500">{error}</p>}{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
