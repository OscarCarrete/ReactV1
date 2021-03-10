import React from 'react';


class SearchBar extends React.Component {

    /*OnInputChange(event) {
        console.log(event.target.value);
    }*/
    state = {term: ''};

    // to fix the this context issue we can create an arrow function or we can call the 
    // arrow function directly on the event handler like this: 
    // <form onSubmit={event => this.onFormSubmit(event)} className='ui form'>
    // or we can bind it on the constructor like this:
    // constructor() {
    // super();
    // this.onFormSubmit = this.onFormSubmit.bind(this);   
    //}
    onFormSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state.term);
        this.props.onSubmitingMe(this.state.term);
    }

    render() {
        return (
        <div className='ui segment'>
            <form onSubmit={this.onFormSubmit} className='ui form'>
                <div className='field'>
                    <label>Image Search</label>
                    <input type='text' value={this.state.term} onChange={e => this.setState({term: e.target.value})}></input>
                </div>                
            </form>
        </div>
        )
    }
}

export default SearchBar;