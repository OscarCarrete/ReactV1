import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from  './ImageList'

class App extends React.Component {

    state = {images: []};

    /*onSearchSubmit(term) {
        console.log(term);
        axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID BYxTToAR4sZMpqXMkxRwIUM9tZu-yi4cJoD8iQY4Xt8'
            }
        }).then((response) => {
            console.log(response.data.results);
        });
    }*/

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {query: term},            
        });

        this.setState({images: response.data.results});
    }

    render() {
        return(
            <div className='ui container' style={{marginTop: '10px'}}>
                <SearchBar onSubmitingMe={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;