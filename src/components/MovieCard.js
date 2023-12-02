import React from 'react'
import { IMG_CDN_URL, TMDB_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { addClipOfMovie, addMovieDetails } from '../utils/movieSlice';

const MovieCard = ({posterPath, movieId}) => {
    const dispatch = useDispatch();
    const getMovieDetails = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", TMDB_OPTIONS);
        const json = await data.json();
        const clips = json && json.results.filter(e=> e.type === "Clip");
        const clip = clips.length ?  clips[0] : json.results[0];
        const moviedata = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"?language=en-U", TMDB_OPTIONS);
        const moviejson = await moviedata.json();
        dispatch(addClipOfMovie(clip));
        dispatch(addMovieDetails(moviejson));
    }
   
if(!posterPath)
    return null;
  return (
    <div className="w-36 md:w-48 pr-4">
        <img alt="movie card " className= "cursor-pointer rounded-lg" src ={IMG_CDN_URL+posterPath} onClick={getMovieDetails}/>
    </div>
  )
}

export default MovieCard