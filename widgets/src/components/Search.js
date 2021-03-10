import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {

    const [term, setTerm] = useState('programming'); 
    const [results, setResults] = useState([]);

    //console.log('I run with every render');
    //console.log(results);

    useEffect (() => {
        //console.log('I run after every render and at inicial render');
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            });
            setResults(data.query.search);
        };

        if (term && !results.length){
            search();
        } else {
            const timeoutId = setTimeout(() => {
                if(term){
                    console.log('timer done')
                    search();
                }
            }, 1000);

            return () => {
                console.log('cancel timer');
                clearTimeout(timeoutId);
            };
        }
        //search();       

    }, [term]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <div>
                        <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                        
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field"> 
                    <label>Enter Search Term</label>
                    <input value={term} onChange={e => setTerm(e.target.value)} className="input"></input>
                </div>
            </div>
            <div className="ui cell list">
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;