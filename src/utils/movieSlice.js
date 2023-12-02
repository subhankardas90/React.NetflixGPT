import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movie", 
    initialState : {
        nowPlayingMovies: null, 
        popularMovies:null,
        topratedMovies:null,
        upcomingMovies:null,
        trailerVideo: null, 
        airingTV:null, 
        movieClip:null, 
        movieDetails:null
    },
    reducers : {
        addNowPlayingMovies :(state, action) =>{
            state.nowPlayingMovies = action.payload;
        }, 
        addTrailerVideo :(state, action) =>{
            state.trailerVideo = action.payload;
        },
        addPopularMovies :(state, action) =>{
            state.popularMovies = action.payload;
        },
        addTopratedMovies :(state, action) =>{
            state.topratedMovies = action.payload;
        },
        addUpcomingMovies :(state, action) =>{
            state.upcomingMovies = action.payload;
        },
        addAiringTV :(state, action) =>{
            state.airingTV = action.payload;
        }, 
        addClipOfMovie :(state, action) => {
            state.movieClip =action.payload;
        }, 
        addMovieDetails :(state, action) =>{
            state.movieDetails =action.payload;
        }
    }
})

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopratedMovies, addUpcomingMovies, addAiringTV, addClipOfMovie, addMovieDetails } = movieSlice.actions;
export default movieSlice.reducer;