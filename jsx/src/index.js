// Import the react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click on me!';
}

// Create a react component
const App = function () {
    //return <div>Hi there!</div>;
    //const buttonText = 'Click Me!';
    const buttonText = { text: 'Click me'};
    const style = { backgroundColor: 'blue', color: 'white'};

    return (
        <div>
            <label className="label" htmlFor="name">Enter Name</label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {getButtonText()}
            </button>
            <button style={style}>
                {buttonText.text}
            </button>
        </div>
    )
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);