"use client";
import { Inter } from "next/font/google";
// import { Button } from "antd";
import React, { useState } from "react";
import { DMEditorView, registerDefaultWidgets } from "dmeditor";

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

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* <Button>{value}</Button> */}
        <DMEditorView data={data} />
      </main>
    </>
  );
}
