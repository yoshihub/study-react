import Head from "next/head";
import { UsePost } from "src/hooks/usePost";



export const Post=() =>{
  const{post,user,error,isLoading}=UsePost()

  if(isLoading){
    return <div>ローデイング中です</div>;
  }

  if(error){
    return <div>{error.message}</div>;
  }


  return (
      <div>
        <Head>
          <title>{post?.title}</title>
        </Head>
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
        {user?.name?<div>Created by {user.name}</div>:null}
      </div>
      )
}
