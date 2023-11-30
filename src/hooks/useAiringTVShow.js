import { useDispatch } from "react-redux";
import { TMDB_AIRINGTV_URL, TMDB_OPTIONS } from "../utils/constant";
import { addAiringTV } from "../utils/movieSlice";
import { useEffect } from "react";

const useAiringTVShow =()=> {
    const dispatch = useDispatch();
  
    const getAiringTVShow =async () =>{
      const data = await fetch(TMDB_AIRINGTV_URL, TMDB_OPTIONS);
      const json = await data.json();
      console.log(json)
      dispatch(addAiringTV(json.results));
    }
    
    useEffect(()=>{
      getAiringTVShow()
    },[]);
}

export default useAiringTVShow;