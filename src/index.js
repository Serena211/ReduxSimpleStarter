import React from 'react'
import ReactDOM from 'react-dom'

//Create a component that return HTML
const App =  () => {
    return <div>Hi</div>
}

//Render the generated component into the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));