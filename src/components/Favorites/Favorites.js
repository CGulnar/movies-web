import React, {Component, useState} from 'react';
import './Favorites.css';
import {useDispatch, useSelector} from "react-redux";
import {setList, setListIsSaved} from "../../store/movies";


const Favorites = () => {
    const list = useSelector(state => state.moviesReducer.list)
    const listIsSaved = useSelector(state => state.moviesReducer.listIsSaved)
    const [listName,setListName] = useState('')
    const dispatch = useDispatch()
    const deleteItem = (imdbID) => {
        const newList = list.filter(item => item.imdbID !== imdbID)
        dispatch(setList(newList))
    }
    const saveList = () => {
        dispatch(setListIsSaved(true))
        localStorage.setItem('list',JSON.stringify(list))
        localStorage.setItem('listName',listName)
    }
    return (
        <div className="favorites">
            <input placeholder="Новый список" value={listName} onChange={e => setListName(e.target.value)} className="favorites__name"/>
            <ul className="favorites__list">
                {list.map((item,index) => {
                    return <li key={index}>{item.Title} ({item.Year}) <button disabled={listIsSaved} onClick={() => deleteItem(item.imdbID)}>Sil</button></li>;
                })}
            </ul>
            <button type="button" disabled={!listName || list.length === 0 || listIsSaved} className="favorites__save" onClick={saveList}>Сохранить список</button>
            {listIsSaved && (
                <a href="http://localhost:3000/list" target="_blank">Spisok</a>
            )}
        </div>
    );
}

export default Favorites;