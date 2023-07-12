"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const [datas, setDatas] = useState({});
  const router = useRouter();

  const hasDataToRenderPdf = Object.keys(datas).length > 0;

  const handleRequest = async (url: string): Promise<any> => {
    try {
      const res = await axios.get(`/api/requestXMLHttp?url=${url}`);
      setDatas(res.data);
    } catch (error) {
      console.error("Ocorreu um erro ao fazer a requisição:", error);
    }
  };

  const openPdfInNewTab = () => {
    const dataQueryString = new URLSearchParams({
      data: JSON.stringify(datas),
    }).toString();
    const url = `/pdf-viewer?${dataQueryString}`;
    window.location.href = url;
  };

  useEffect(() => {
    const params = searchParams["url"];

    if (params) {
      handleRequest(params);
      return;
    }

    router.push("/homeSearch");
  }, []);

  useEffect(() => {
    if (hasDataToRenderPdf && datas) {
      openPdfInNewTab();
    }
  }, [datas]);

  return (
    <>
      <div></div>
    </>
  );
}
