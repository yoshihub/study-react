import Link from "next/link";
import { UsePost } from "src/hooks/usePost";


export const PostByCommentId=(props) =>{

  const {data,error,isLoading}=UsePost(props.id);

  if(isLoading){
    return <div>ローデイング中です</div>;
  }

  if(error){
    return <div>{error.message}</div>;
  }


  return (<Link href={`/posts/${data?.id}`}>
          <a className="text-lg hover:text-blue-500">{data?.title}</a>
          </Link>);

}
