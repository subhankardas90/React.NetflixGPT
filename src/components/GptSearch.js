import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constant';

const GptSearch = () => {
  return (
    <>
    <div className="">
      <img className="fixed -z-10" src={BG_URL} alt="logo" />
    </div>
    <div className="">
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  </>
  );
};

export default GptSearch