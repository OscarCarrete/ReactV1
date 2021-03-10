import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    // We can replace the constructor and initialize the state object in one line
    /*constructor(props) {
        super(props);

        this.state = { lat: null, errorMessage: '' };

        // We can load data in the constructor, 
        // it is just a good practice to do it over componentDidMount method
        // 
        /*window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude}),
            (err) => this.setState({ errorMessage: err.message})
        );*/
    /*}*/

    state = { lat: null, errorMessage: '' };

    componentDidMount(){
        //console.log('My component was rendered in the screen');
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude}),
            (err) => this.setState({ errorMessage: err.message})
        );
    }

    
    componentDidUpdate(){
        console.log('My component was re-rendered');
    }

    renderContent () {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />
        }

        //return <div>Loading!</div>;
        return <Spinner message="Please accept location request"/>
    }

    // React says we have to define the "method" render!!!
    render () {  
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))