import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    // one way of initializing state
    constructor(props) {
        super(props);   //must be called when using constructor
        
        // Rule of State: state must be initialize when component is created
        this.state = { lat: null , errorMessage: '' };
    }

    componentDidMount() {
        //moved again from constructor to componentDidMount() method to centralize data loading
        window.navigator.geolocation.getCurrentPosition(
            // call to setState to update state
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    // React says we have to define a render method for each app component
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Lat: {this.state.lat}</div>
        }

        return <div>Loading!</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

