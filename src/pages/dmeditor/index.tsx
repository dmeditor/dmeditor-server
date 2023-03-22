import { GetServerSideProps } from 'next';
import getRawBody from 'raw-body';
import {DMEditorView, serverLoad} from 'dmeditor';

export default function Home(props:{dmeData:any}) {
  return (
    <>     
      <main>
        <DMEditorView data={props.dmeData} />
      </main>
    </>
  )
}

export const getServerSideProps:GetServerSideProps = async ({req})=>{
  const body = await getRawBody(req);
  const dmeData = JSON.parse(body.toString("utf-8"));  

//  const dmeFetchedData = await serverLoad(dmeData);

  return {props:{dmeData:dmeData}};
}

