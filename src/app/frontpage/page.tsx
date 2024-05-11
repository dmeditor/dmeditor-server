"use client";

// import { DMEditorView } from "dmeditor";
import React from "react";
// import "../../dmeditor_init";

const EditPage = () => {
  return (
    <div>
      <main>DM Editor view sample</main>
      {/* <DMEditorView
        data={[
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
        ]}
      /> */}
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
//   const body = await getRawBody(req);
//   const dmeData = JSON.parse(body.toString("utf-8"));

//   const dmeFetchedData = await serverLoad(dmeData);

//   return { props: { dmeData: dmeFetchedData } };
// };

export default EditPage;
