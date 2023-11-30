import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { TMDB_OPTIONS } from "../utils/constant";
import { useEffect } from "react";


const useGetMovieVideo =(movieId) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store) => store.movie.trailerVideo);

    const getMovieVideo = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", TMDB_OPTIONS);
        const json = await data.json();
        const trailers = json && json.results.filter(e=> e.type === "Trailer");
        const trailer = trailers.length ?  trailers[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    }
    useEffect(()=>{
        !trailerVideo && getMovieVideo();
    },[]);
}

export default useGetMovieVideo;