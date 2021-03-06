import React, {Component} from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import {useSelector} from "react-redux";

const Movies = () => {
    const movies = useSelector(state => state.moviesReducer.movies)
    return (
        <ul className="movies">
            {movies?.map((movie) => (
                <li className="movies__item" key={movie.imdbID}>
                    <MovieItem {...movie} />
                </li>
            ))}
        </ul>
    );
}

export default Movies;