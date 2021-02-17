import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    // one way of initializing state
    constructor(props) {
        super(props);
        
        // Rule of State: state must be initialize when compentn is created
        this.state = { lat: null }; 
    }

    // React says we have to define a render method for each app component
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );

        return <div>Latitude: </div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

