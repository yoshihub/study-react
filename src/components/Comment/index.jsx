import Head from "next/head";
import { UseComment } from "src/hooks/useComment";



export const Comment=() =>{
  const{data,error,isLoading}=UseComment()

  if(isLoading){
    return <div>ローデイング中です</div>;
  }

  if(error){
    return <div>{error.message}</div>;
  }


  return (
      <div>
        <Head>
          <title>{data.title}</title>
        </Head>
        <h1>{data.body}</h1>
        <p>{data.name}</p>
        <p>{data.email}</p>
      </div>
      )
}
