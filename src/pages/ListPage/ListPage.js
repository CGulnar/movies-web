import React, {Component, useEffect, useState} from 'react';
import './ListPage.css';

const ListPage = () => {
    const [list,setList] = useState([])
    useEffect(() => {
        setList(JSON.parse(localStorage.getItem('list')))
    },[])
    return (
        <div className="list-page">
            <h1 className="list-page__title">{localStorage.getItem('listName')}</h1>
            <ul>
                {list.map((item) => {
                    return (
                        <li key={item.imdbID}>
                            <a href="https://www.imdb.com/title/tt0068646/"
                               target="_blank">{item.Title} ({item.Year})</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ListPage;