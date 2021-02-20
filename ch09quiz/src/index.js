import React from 'react';
import ReactDOM from 'react-dom';

const users = [
    { id: 1, name: 'Mario Alvarez'},
    { id: 2, name: 'Iron Man'},
    { id: 3, name: 'The Hulk'},
    { id: 4, name: 'Black Widow'},
];

const userList = users.map(({id, name}) => {
    return <li key={id}>{name}</li>
})

class App extends React.Component {
    render() {
        return (
            <ul>
                {userList}
            </ul>
        );
    }
}
ReactDOM.render(<App />, document.querySelector('#root'));