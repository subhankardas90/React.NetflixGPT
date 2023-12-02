import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addMovieDetails } from '../utils/movieSlice';

const GptSearch = () => {
  const  dispatch = useDispatch();
  dispatch(addMovieDetails(null));
  return (
    <>
    <div className="fixed -z-10">
      <img className="min-h-screen w-screen object-cover bg-no-repeat" src={BG_URL} alt="logo" />
    </div>
    <div className="">
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  </>
  );
};

export default GptSearch