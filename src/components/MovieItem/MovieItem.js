import React from 'react';
import './MovieItem.css';
import {useDispatch, useSelector} from "react-redux";
import {setList} from "../../store/movies";

const MovieItem = ({Title,Year,Poster,imdbID}) => {
    const list = useSelector(state => state.moviesReducer.list)
    const dispatch = useDispatch()
    const addToList = () => {
        const newList = [...list]
        newList.push({
            Title,
            Year,
            Poster,
            imdbID
        })
        dispatch(setList(newList))
    }
    return (
        <article className="movie-item">
            <img className="movie-item__poster" src={Poster} alt={Title}/>
            <div className="movie-item__info">
                <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                <button disabled={list.some(item => item.imdbID === imdbID)} type="button" onClick={addToList} className="movie-item__add-button">Добавить
                    в список
                </button>
            </div>
        </article>
    );
}

export default MovieItem;