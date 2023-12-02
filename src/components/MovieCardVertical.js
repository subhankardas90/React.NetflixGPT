import React from 'react'
import { IMG_CDN_URL, TMDB_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { addClipOfMovie, addMovieDetails } from '../utils/movieSlice';

const MovieCardVerical = ({posterPath, movie}) => {
  const {id, release_date, title, overview, adult, popularity} = movie;
    const dispatch = useDispatch();
    const getMovieDetails = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US", TMDB_OPTIONS);
        const json = await data.json();
        const clips = json && json.results?.filter(e=> e.type === "Clip");
        const clip = clips.length ?  clips[0] : json.results[0];
        const moviedata = await fetch("https://api.themoviedb.org/3/movie/"+id+"?language=en-U", TMDB_OPTIONS);
        const moviejson = await moviedata.json();
        dispatch(addClipOfMovie(clip));
        dispatch(addMovieDetails(moviejson));
    }
   
if(!posterPath)
    return null;
  return (
    <div className="p-2 flex">
        <div><img alt="movie card " className= "w-28 md:w-48 cursor-pointer rounded-lg" src ={IMG_CDN_URL+posterPath} onClick={getMovieDetails}/></div>
        <div className="w-28 md:w-80 px-4">
        <div className="font-bold">{title}</div>
          
        
        <div>
        <span className="group relative">
          <div className="absolute hidden group-hover:block w-auto">
            <div className="right-0 rounded bg-black px-4 py-1 text-lg text-white whitespace-wrap">
            {overview}
            </div>
          </div>
          <div className="truncate hover:text-clip">{overview}</div>
        </span>
      </div>
        <div><span className="font-bold">Release Date : </span>{release_date}</div>
        <div><span className="font-bold">Popularity Index : </span>{popularity}</div>
        <div><span className="font-bold">Adult Conent : {adult?<span>Yes</span>:<span>No</span>} </span></div>
        </div>
    </div>
  )
}

export default MovieCardVerical