import {deleteData,getData, updateData} from "../store";
import { useCallback } from "react";
import { useState,useEffect } from "react";
export function useStore() {
  const [data, setData] = useState([]);
  const KEY_MOVIE = 'FAVORITE';
  useEffect(() => {
    (async()=>{
        console.log("22222222222")
        const dataStore =  await getData(KEY_MOVIE);
        dataStore?setData(dataStore):null;
    })();
  },[]);

const isExist = useCallback(async(id)=>{
  console.log("1111111111")
  console.log(id);
  console.log("data you said",data)
const data = await getData(KEY_MOVIE);
const dataFilter = data.filter(item => item.movieId == id);
console.log(dataFilter,"check is exist")
if(dataFilter.length > 0) return true;
return false;
},[data])


const addMovie = useCallback((data) => {
    if(!isExist(data.movieId)){
      console.log("Hiiii,is not here")
      updateData({key: KEY_MOVIE, data});
    }
    
      
  }, [data]);

 const deleteMovie = useCallback((id) => {
    deleteData({key: KEY_MOVIE, id});
  }, [data]);

  return {data,isExist,addMovie,deleteMovie}
}