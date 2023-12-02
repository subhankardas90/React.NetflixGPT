import React from 'react'
import { useDispatch } from 'react-redux';
import { TMDB_OPTIONS } from '../utils/constant';
import { addClipOfMovie, addMovieDetails } from '../utils/movieSlice';

const VideoTitle = ({title, overview, movieId }) => {
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

  return (
    <div className='w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
        <div className="my-4 md:m-0">
        <button className=" bg-white text-black py-1 md:py-4 px-3 md:px-12 font-bold text-xl rounded-lg hover:bg-opacity-80" onClick={getMovieDetails}>
          Play
        </button>
        <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 font-bold  text-xl bg-opacity-50 rounded-lg" onClick={getMovieDetails}>
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle