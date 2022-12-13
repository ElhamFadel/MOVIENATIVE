import { useLayoutEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useStore } from '../hooks/useStoreMovie';

const Bookmark = ({dataMovie}) => 
{
   const [markedState,setMarkedState] = useState(false);
   const {isExist,addMovie,deleteMovie} = useStore('favorites');
   useLayoutEffect(()=>{
        setMarkedState(isExist(dataMovie.movieId))
   },[dataMovie])
 
 const handleDeleteMovie = () =>{ 
    deleteMovie();
    setMarkedState(false)
  }

 const handleAddMovie = () =>{
   console.log("Hello add movie");
   addMovie(dataMovie);
   setMarkedState(true);
  }
return (
     
    <TouchableOpacity style={{right:15}}
    onPress={()=>{markedState? handleDeleteMovie():handleAddMovie()}} 
    >
      <MaterialIcons name={markedState?"turned-in":"bookmark-outline"} size={25} color={'#fff'}  />
    </TouchableOpacity>
)
}

export {
    Bookmark
}