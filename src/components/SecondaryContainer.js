import React from 'react'
import MovieList from './MovieList'
import { useDispatch, useSelector } from 'react-redux'
import { addMovieDetails } from '../utils/movieSlice'

const SecondaryContainer = () => {
const movies = useSelector((state)=> state.movie)
const  dispatch = useDispatch();
dispatch(addMovieDetails(null));
  return (
    <div className="bg-black">
        
        <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-30">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Trending Movies"} movies={movies?.topratedMovies}/>
        <MovieList title={"Popular Movies"} movies={movies?.popularMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies}/>
        <MovieList title={"Airing TV"} movies={movies?.airingTV}/>
        </div>
    </div>
  )
}

export default SecondaryContainer