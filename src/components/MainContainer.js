import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {

  const movies = useSelector(store => store.movie?.nowPlayingMovies)   
  if(!movies)
    return;
  let randomnumber = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
  let mainMovie = movies[randomnumber]; 
  while(!mainMovie.original_title)
    mainMovie = movies[randomnumber]; 
  const {original_title, overview, id } = mainMovie;
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>

  )
}

export default MainContainer