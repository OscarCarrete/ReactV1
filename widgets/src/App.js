import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Router';
import Header from './components/Header';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'What is React2?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'How do you use React?',
        content: 'YPu use React to create components'
    }
];

const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'A shade of blue',
        value: 'blue'

    }
];

const showAccordion = () => {
    if(window.location.pathname === '/') {
        return <Accordion items={items} />;
    }
}

const showList = () => {
    if(window.location.pathname === '/list') {
        return <Search />;
    }
}

const showDropdown = () => {
    if(window.location.pathname === '/dropdown') {
        return <Dropdown label="" options={options} />;
    }
}

const showTranslate = () => {
    if(window.location.pathname === '/translate') {
        return <Translate />;
    }
}

export default () => {

    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropDown] = useState(true);

    return (
        <div>
            {/*<button onClick={() => setShowDropDown(!showDropdown)}>Toogle Dropdown</button>
            {showDropdown ?
            <Accordion items={items} />
            <Search />
            <Dropdown options={options} onSelectedChange={setSelected} selected={selected}/>
            : null
            }
            <Translate />*/}
            {/*<div>{showAccordion()}</div>
            <div>{showList()}</div>
            <div>{showDropdown()}</div>
            <div>{showTranslate()}</div>*/}
            <Header />
            <Route path='/'> <Accordion items={items}/></Route>
            <Route path='/list'><Search/></Route>
            <Route path='/dropdown'><Dropdown label="Select a color" options={options} onSelectedChange={setSelected} selected={selected}/></Route>
            <Route path='/translate'><Translate/></Route>
        </div>
    );
};