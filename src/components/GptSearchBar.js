import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { TMDB_OPTIONS } from '../utils/constant'
import { addGptMovieResult } from '../utils/gptSlice'

const GptSearchBar = () => {
    const language = useSelector((store) => store.config.lang)
    const dispatch = useDispatch(); 
    const searchText = useRef(null);

      // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
        TMDB_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptMovies = searchText.current.value.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

    return (
        <div className="pt-[35%] md:pt-[10%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={e=> {
                    e.preventDefault();
                    handleGptSearchClick();
                    }}>
            {lang && lang[language] && <>
            <input ref={searchText} type="text" className="p-4 m-4 col-span-9" placeholder={ lang && lang[language].gptSearchHolder}/>
            <button className="py-2 px-4 bg-red-700 col-span-3">{lang && lang[language].search} </button></>}
            </form>
        </div>
    )
}

export default GptSearchBar