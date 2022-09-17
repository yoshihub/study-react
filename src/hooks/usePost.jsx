import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";


export const UsePost=(id)=>{

  const {data,error}=useSWR(id?`https://jsonplaceholder.typicode.com/posts/${id}`:null,fetcher);

  return {
          data,
          error,
          isLoading:!data&&!error,
        };
  };
