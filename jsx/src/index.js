// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//function to solve exercise
function getTime() {
    return (new Date()).toLocaleTimeString()
}

// Create a react component
const App = function() {
    const buttonText = {text: 'Click Me!'};

    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type='text'/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {buttonText.text}
            </button>
            <hr />
            <div> Current Time:</div>
            <h3>{getTime()}</h3>
        </div>
    );
}

// Take the react compenent and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);