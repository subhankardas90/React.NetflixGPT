import { useDispatch } from "react-redux";
import { TMDB_OPTIONS, TMDB_TOPRATED_URL } from "../utils/constant";
import { addTopratedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopratedMovies =()=> {
    const dispatch = useDispatch();
  
    const getTopratedMovies =async () =>{
      const data = await fetch(TMDB_TOPRATED_URL, TMDB_OPTIONS);
      const json = await data.json();
      dispatch(addTopratedMovies(json.results));
    }
    
    useEffect(()=>{
      getTopratedMovies()
    },[]);
}

export default useTopratedMovies;