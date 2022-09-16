import Head from "next/head";
import { UseUser } from "src/hooks/useUser";


export const User=() =>{
  const{data,error,isLoading}=UseUser();

  if(isLoading){
    return <div>ローデイング中です</div>;
  }

  if(error){
    return <div>{error.message}</div>;
  }

  return (
      <div>
        <Head>
          <title>{data.name}</title>
        </Head>
        <p>{`${data?.name}(${data?.email})`}</p>

      </div>
      )
}
