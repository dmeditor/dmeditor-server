"use client";
import { Inter } from "next/font/google";
// import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { DMEditorView, registerDefaultWidgets, MiniText } from "dmeditor";

const inter = Inter({ subsets: ["latin"] });

registerDefaultWidgets();

export default function Home() {
  const [value, setValue] = useState("Text Button");
  const data = [
    {
      data: {
        level: 2,
        settings: {
          level: 2,
        },
        value: "TEST",
      },
      id: "lPqRNWSzhXcr1SG38Vtb9",
      type: "heading",
    },
  ];
  const [htmlString, setHtmlString] = useState<string>("");

  useEffect(() => {
    const fetchHtml = async () => {
      const response = await fetch("/api/render");
      const data = await response.json();
      console.log("wing", data);
      setHtmlString(data.html);
    };
    fetchHtml();
  }, []);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* <Button>{value}</Button> */}
        {/* <DMEditorView data={data} /> */}
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </main>
    </>
  );
}
