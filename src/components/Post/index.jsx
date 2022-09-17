import Head from "next/head";
import { useRouter } from "next/router";
import { CommentsByPostId } from "src/components/Comments/CommentsByPostId";
import { UserByUserId } from "src/components/User/UserByUserId";
import { UsePost } from "src/hooks/usePost";


export const Post=() =>{
  const router =useRouter();

  const {data,error,isLoading}=UsePost(router.query.id);

  if(isLoading){
    return <div>ローデイング中です</div>;
  }

  if(error){
    return <div>{error.message}</div>;
  }


  return (
      <div>
        <Head>
          <title>{data?.title}</title>
        </Head>
        <UserByUserId id={data.userId}/>
        <h1 className="text-3xl font-bold">{data?.title}</h1>
        <p className="text-xl text-gray-900 mt-2">{data?.body}</p>
        <h2 className="text-lg font-bold mt-10">コメント一覧</h2>
        <CommentsByPostId id={data.id}/>
      </div>
      )
}
