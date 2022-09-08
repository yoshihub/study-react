import { useEffect,useReducer,useCallback } from 'react'

export const Posts=() =>{

  const initialState={
    data:[],
    loading:true,
    error:null,
  };

  const reducer=(state,action)=>{
    switch(action.type){
      case "end":{
        return{
        ...state,
        data:action.data,
        loading:false,
      };
    }
      case "error":{
        return {
        ...state,
        loading:false,
        error:action.error,
      };
    }
      default:{
        throw new Error("no such action type!");
    }
  };
}

  const [state,dispatch]=useReducer(reducer,initialState);

  const getPosts=useCallback(async ()=>{
    try{
      const res =await fetch("https://jsonplaceholder.typicode.com/posts");
      if(!res.ok){
        throw new Error("エラー発生し、データ取得に失敗しました");
      }
    const json=await res.json();
    dispatch({type:"end",data:json})
    }catch(error){
    dispatch({type:"error",error});
    }

  },[])

  useEffect(()=>{
    getPosts();
  },[getPosts]);


  if(state.loading){
    return <div>ローデイング中です</div>;
  }

  if(state.error){
    return <div>{state.error.message}</div>;
  }

  if(state.data.length===0){
    return <div>データは空です</div>;
  }



  return (
      <ol>
      {state.data.map(post=>{
        return(
          <li key={post.id}>{post.title}</li>
        )
      })}
      </ol>
  )
    }
