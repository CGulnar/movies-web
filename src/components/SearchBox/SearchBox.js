import React, {Component, useState} from 'react';
import './SearchBox.css';
import {useDispatch} from "react-redux";
import {setMovies} from "../../store/movies";

const SearchBox = () => {
    const dispatch = useDispatch()
    const [searchLine, setSearchLine] = useState('')
    const searchLineChangeHandler = (e) => {
        setSearchLine(e.target.value)
    }
    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
    }

    const fetchHandlerClick = () => {
        fetch(`https://www.omdbapi.com/?s=${searchLine}&apikey=3c894ac6`)
            .then(res => res.json())
            .then(data =>
                dispatch(setMovies(data.Search))
            )

    }


    return (
        <div className="search-box">
            <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                    Искать фильм по названию:
                    <input
                        value={searchLine}
                        type="text"
                        className="search-box__form-input"
                        placeholder="Например, Shawshank Redemption"
                        onChange={searchLineChangeHandler}
                    />
                </label>
                <button
                    type="submit"
                    className="search-box__form-submit"
                    disabled={!searchLine}
                    onClick={fetchHandlerClick}
                >
                    Искать
                </button>
            </form>
        </div>
    );
}

export default SearchBox;