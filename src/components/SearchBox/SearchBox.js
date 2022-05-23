import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {

    state = {
        searchLine: '',
        items:[]
    }
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
    }
    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
    }

fetchHandlerClick = () => {
    fetch(`https://www.omdbapi.com/?s=${this.state.searchLine}&apikey=3c894ac6`)
    .then(res => res.json())
    .then(data =>
        this.props.setState(data.Search)       
   )

}


    render() {
        const { searchLine } = this.state;
        console.log(this.state.items)
        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                            onChange={this.searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                        onClick={this.fetchHandlerClick }
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    }
}
 
export default SearchBox;