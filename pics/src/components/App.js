import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {

    async onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID BG9hNmbFlPf31NvI6LdfHP7vGBgfNHnkRzoD_x4Wsp8'
            }
        })
        .then((response) => {
            console.log(response.data.results);
        });
    }
    
    render () {
        return (
            <div className="ui container" style={{ marginTop: '10px'}} >
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
};

export default App;