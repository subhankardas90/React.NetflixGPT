import { useDispatch, useSelector } from "react-redux";
import { TMDB_OPTIONS, TMDB_UPCOMING_URL } from "../utils/constant";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies =()=> {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector(store=> store.movie.upcomingMovies)

    const getUpcomingMovie =async () =>{
      const data = await fetch(TMDB_UPCOMING_URL, TMDB_OPTIONS);
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));
    }
    
    useEffect(()=>{
      !upcomingMovies && getUpcomingMovie()
    },[]);
}

export default useUpcomingMovies;