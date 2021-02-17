import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    // one way of initializing state
    constructor(props) {
        super(props);   //must be called when using constructor
        
        // Rule of State: state must be initialize when component is created
        this.state = { lat: null , errorMessage: '' };

        //moved computational code to constructor to reduce constant calls to it
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // call to setState to update state
                this.setState({ lat: position.coords.latitude });
            },
            err => {
                this.setState({ errorMessage: err.message });
            }
        );


    }

    // React says we have to define a render method for each app component
    render() {
        return (
            <div>
                Latitude: {this.state.lat}
                <br />
                Error: {this.state.errorMessage}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

