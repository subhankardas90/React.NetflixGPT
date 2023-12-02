import React from 'react'
import MovieCardVerical from './MovieCardVertical';

const MovieListVertical = ({movies}) => {

  return (
    <div className="px-4">
    <div className="">
        {movies?.map(movie => (
        <MovieCardVerical key={movie.id} posterPath = {movie?.poster_path} movie ={movie}/>
        ))}</div>
    </div>
  )
}

export default MovieListVertical