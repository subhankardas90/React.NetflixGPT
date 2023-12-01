import { useDispatch, useSelector } from "react-redux";
import { TMDB_NOWPLAYING_URL, TMDB_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies =()=> {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store=> store.movie.nowPlayingMovies)
  
    const getNowPlayingMovie =async () =>{
      const data = await fetch(TMDB_NOWPLAYING_URL, TMDB_OPTIONS);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    }
    
    useEffect(()=>{
        !nowPlayingMovies && getNowPlayingMovie()
    },[]);
}

export default useNowPlayingMovies;