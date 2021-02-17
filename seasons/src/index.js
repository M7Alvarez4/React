import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    // one way of initializing state
    constructor(props) {
        super(props);
        
        // Rule of State: state must be initialize when component is created
        this.state = { lat: null };

        //moved computational code to constructor to reduce constant calls to it
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // call to setState to update state
                this.setState({ lat: position.coords.latitude });
            },
            err => console.log(err)
        );


    }

    // React says we have to define a render method for each app component
    render() {
        return <div>Latitude: {this.state.lat}</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

