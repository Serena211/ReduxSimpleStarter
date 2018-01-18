import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'


const API_KEY = 'AIzaSyBZAnfN4Ma5VqsJDr9QaAPxJGhGK0wnjsk';
//Create a component that return HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}

//Render the generated component into the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));