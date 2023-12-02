import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { addMovieDetails } from '../utils/movieSlice'

const MainContainer = () => {

  let movies = useSelector(store => store.movie?.nowPlayingMovies)  ;
  const  dispatch = useDispatch();
  dispatch(addMovieDetails(null));
  if(!movies)
    return;
  movies= movies.filter(movie=> movie.original_title)
  const randomnumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  const mainMovie = movies[randomnumber]; 
  const {original_title, overview, id } = mainMovie;
  return (
    <div>
        <VideoTitle title={original_title} overview={overview} movieId={id}/>
        <VideoBackground movieId={id}/>
    </div>

  )
}

export default MainContainer