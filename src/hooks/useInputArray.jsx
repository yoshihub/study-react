import { useCallback,useState } from 'react'

export const useInputArray=()=>{
    const [text,setText]=useState("");
    const [array,setArray]=useState([]);

    const handleChange=useCallback((e)=>{
          setText(e.target.value.trim());
        },[]);

    const handleAdd=useCallback(()=>{
      setArray((prevArray)=>{
        if(prevArray.includes(text)){
          alert("同じ要素あり");
          return prevArray;
        }
        const newArray=[...prevArray,text];
        return newArray;
      });
  },[text]);

  return {text,array,handleChange,handleAdd};
  }
