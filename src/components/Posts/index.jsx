import { useEffect,useState,useCallback } from 'react'

export const Posts=() =>{
  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);

  const getPosts=useCallback(async ()=>{
    try{
      const res =await fetch("https://jsonplaceholder.typicode.com/posts");
      if(!res.ok){
        throw new Error("エラー発生し、データ取得に失敗しました");
      }
    const json=await res.json();
    setPosts(json);
    }catch(error){
      setError(error);
    }

    setLoading(false);
  },[])

  useEffect(()=>{
    getPosts();
  },[getPosts]);

  if(loading){
    return <div>ローデイング中です</div>;
  }

  if(error){
    return <div>{error.message}</div>;
  }

  if(posts.length===0){
    return <div>データは空です</div>;
  }



  return (
      <ol>
      {posts.map(post=>{
        return(
          <li key={post.id}>{post.title}</li>
        )
      })}
      </ol>
  )
}
