import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

    //runs through babel to create the constructor
    state = {lat: null, errorMessage: ''};

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
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <div>Loading!</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

