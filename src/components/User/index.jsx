import { PostsByUserId } from "src/components/Posts/PostsByUserId";
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
        <h1 className="font-bold text-3xl">{data.name}</h1>
        <h2 className="text-xl font-bold mt-10">詳細</h2>
        <ul className="list-inside list-disc mt-2 text-xl">
          <li>アカウント名：{data.email}</li>
          <li>メール：{data.username}</li>
          <li>電話番号：{data.address.city}</li>
          <li>Webサイト:{data.phone}</li>
          <li>住所：{data.website}</li>
          <li>勤務先：{data.company.name}</li>
        </ul>
        <h2 className="text-xl font-bold mt-10">投稿</h2>
        <div className="mt-2">
        <PostsByUserId id={data.id}/>
        </div>
      </div>
      )
}
