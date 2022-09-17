import Head from "next/head";
import { PostByCommentId } from "src/components/Post/PostByCommentId";
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
        <div className="text-lg">
          {data.name}({data.email})
        </div>
        <h1 className="text-3xl font-bold">{data.body}</h1>
        <h2 className="text-xl font-bold mt-10">元の記事</h2>
        <div className="mt-2">
        <PostByCommentId id={data.postId}/>
        </div>
      </div>
      )
}
