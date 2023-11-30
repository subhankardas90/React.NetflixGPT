import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
const movies = useSelector((state)=> state.movie)
  return (
    <div className="bg-black">
        
        <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
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