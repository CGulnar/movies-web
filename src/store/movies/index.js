import {createSlice} from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name: 'counter',
    initialState: {
        movies: [],
        list: [],
        listIsSaved : false
    },
    reducers: {
        setMovies: (state, {payload}) => {
            state.movies = payload
        },
        setList: (state, {payload}) => {
            state.list = payload
        },
        setListIsSaved:(state,{payload}) => {
            state.listIsSaved = payload
        }
    },
})

export const {setMovies, setList,setListIsSaved} = moviesSlice.actions

export default moviesSlice.reducer