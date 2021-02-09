// Import the React and ReactDO libraries
import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component
const App = function() {
    return <div>Hi there!</div>
}

// Take the react compenent and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);