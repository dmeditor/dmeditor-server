import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

import {
  DMEditorView,
  dmeServerSideLoad,
  registerDefaultWidgets,
} from "dmeditor";
import React from "react";

registerDefaultWidgets();

const EditPage = (props: { data: any }) => {
  return (
    <div>
      <main>DM Editor view sample</main>
      <div>
        <DMEditorView data={props.data} />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res } = context;
  //fetch data from database or remote server
  const data = [
    {
      data: {
        level: 2,
        settings: {},
        value: "TEST heading",
      },
      id: "lPqRNWSzhXcr1SG38Vtb9",
      type: "heading",
    },
  ];

  try {
    dmeServerSideLoad(data, context);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    throw new Error("Internal Server Error");
  }

  return { props: { data: data } };
};

export default EditPage;
