import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const language = useSelector((store) => store.config.lang)
    return (
        <div className="py-[8%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12">
            {lang && lang[language] && <>
            <input type="text" className="p-4 m-4 col-span-9" placeholder={ lang && lang[language].gptSearchHolder}/>
            <button className="py-2 px-4 bg-red-700 col-span-3">{lang && lang[language].search} </button></>}
            </form>
        </div>
    )
}

export default GptSearchBar