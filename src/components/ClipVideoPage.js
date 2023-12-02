import React from 'react'
import { useSelector } from 'react-redux';
import MovieListVertical from './MovieListVertical';

const ClipVideoPage = () => {
    const movieClip = useSelector(store=> store.movie.movieClip)
    const movieDetails = useSelector(store=> store.movie.movieDetails)
    const movies = useSelector((state)=> state.movie)
    const {title, overview} = movieDetails;
    return (
        <>
        <div className="flex py-24 mx-4">
          <div className="w-9/12 ">
            <iframe className="w-full aspect-video" src={"https://www.youtube.com/embed/"+movieClip?.key} title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            <div className="p-4 m-4">
            <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
            <p className="hidden md:inline-block py-6 text-lg w-9/12">{overview}</p>
            </div>
          </div>
           
          <div className="w-3/12">
            <MovieListVertical movies={movies?.topratedMovies}/>
          </div>
        </div>
        </>
    )
}

export default ClipVideoPage