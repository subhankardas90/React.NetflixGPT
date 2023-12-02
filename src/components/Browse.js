import { useSelector } from 'react-redux';
import useAiringTVShow from '../hooks/useAiringTVShow';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopratedMovies from '../hooks/useTopratedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import ClipVideoPage from './ClipVideoPage';

const Browse = () => {

  const showGPTSearch = useSelector(state => state.gpt?.showGptSearch);
  const movieDetails = useSelector(store=> store.movie?.movieDetails);
  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpcomingMovies();
  useAiringTVShow();
  return (
    <div>
       <Header />
      {
      movieDetails ? 
      <ClipVideoPage />
        :showGPTSearch ? (
          <GptSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
    </div>
  )
}

export default Browse