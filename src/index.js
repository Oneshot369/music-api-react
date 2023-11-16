import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

const Index = () =>{
    return[
        <div>
            <App></App>

        </div>
    ]
}

ReactDOM.render(<Index />, document.querySelector('#root'));