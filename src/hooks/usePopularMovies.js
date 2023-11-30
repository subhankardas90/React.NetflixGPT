import { useDispatch } from "react-redux";
import { TMDB_OPTIONS, TMDB_POPULAR_URL } from "../utils/constant";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies =()=> {
    const dispatch = useDispatch();
  
    const getPopularMovies =async () =>{
      const data = await fetch(TMDB_POPULAR_URL, TMDB_OPTIONS);
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    }
    
    useEffect(()=>{
      getPopularMovies()
    },[]);
}

export default usePopularMovies;