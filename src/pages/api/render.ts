// pages/api/render.ts
// import Render from "@/components/render";
import type { NextApiRequest, NextApiResponse } from "next";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { MiniText } from "dmeditor";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const htmlString = ReactDOMServer.renderToStaticMarkup(
    React.createElement(MiniText, {
      mode: "view",
      value: [
        {
          type: "paragraph",
          children: [
            {
              text: "",
            },
          ],
        },
        {
          type: "image",
          url: "https://zeekrlife-oss.zeekrlife.com/frontend/atom/atom_json/JSON-2c293ed22f16f3602f139511e8d9479b/zeekr001_kv_2024-32788be256e0c4bcad0fced53952a5ec.png",
          children: [
            {
              text: "",
            },
          ],
          setting: {
            scale: 1.79,
          },
          scale: 1.79,
          width: 168.8806682577565,
          height: 94.34799999999993,
        },
        {
          type: "paragraph",
          children: [
            {
              text: "test1",
            },
          ],
        },
        {
          type: "numbered-list",
          children: [
            {
              type: "list-item",
              children: [
                {
                  text: "test2",
                },
              ],
            },
          ],
        },
        {
          type: "numbered-list",
          children: [
            {
              type: "list-item",
              children: [
                {
                  text: "test3",
                },
              ],
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "test4",
              italic: true,
              bold: true,
              underline: true,
            },
          ],
          align: "center",
        },
        {
          type: "paragraph",
          children: [
            {
              text: "",
            },
            {
              type: "link",
              url: "http://www.baidu.com",
              children: [
                {
                  text: "test5",
                },
              ],
            },
            {
              text: "",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "test6",
              color: "#c71a1a",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              color: "#c71a1a",
              text: "",
            },
          ],
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
          children: [
            {
              text: "",
            },
          ],
          setting: {
            align: "right",
            width: 20,
            height: 20,
          },
          align: "right",
          width: 20,
          height: 20,
        },
        {
          type: "paragraph",
          children: [
            {
              text: "",
            },
          ],
        },
        {
          type: "heading-one",
          children: [
            {
              text: "test7",
            },
          ],
        },
      ],
    })
  );
  // const htmlString = ReactDOMServer.renderToString(
  //   <Render
  //     data={[
  //       {
  //         id: "widget-X2vWh9pQSHtJthpoCSsrb",
  //         style: {
  //           _: "big-space",
  //         },
  //         data: {
  //           value: "This is a heading",
  //           level: 2,
  //           settings: {
  //             align: "left",
  //             general: {
  //               padding: 80,
  //             },
  //           },
  //         },
  //         type: "heading",
  //       },
  //       {
  //         id: "N-LAQWihvfZv1SmUAPoQx",
  //         type: "text",
  //         data: {
  //           value: [
  //             {
  //               type: "paragraph",
  //               children: [
  //                 {
  //                   text: "",
  //                 },
  //               ],
  //             },
  //             {
  //               type: "image",
  //               url: "https://zeekrlife-oss.zeekrlife.com/frontend/atom/atom_json/JSON-2c293ed22f16f3602f139511e8d9479b/zeekr001_kv_2024-32788be256e0c4bcad0fced53952a5ec.png",
  //               children: [
  //                 {
  //                   text: "",
  //                 },
  //               ],
  //               setting: {
  //                 width: 127,
  //                 height: 71,
  //                 scale: 1.79,
  //               },
  //             },
  //             {
  //               type: "paragraph",
  //               children: [
  //                 {
  //                   text: "",
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //       },
  //     ]}
  //   />
  // );
  res.status(200).json({ html: htmlString });
}
