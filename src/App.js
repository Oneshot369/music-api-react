import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

const App = () =>{
    return[
        <div>
            <h2>This is the api</h2>
            <Card
            albumTitle="abby road"
            albumDescription = "Abby Road is the eleventh studio album by English rock band the Beatles"
            imgURL = "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Beatles_-_Abbey_Road.jpg/220px-Beatles_-_Abbey_Road.jpg"
            buttonText="ok"/>
            <Card/>
            <Card/>

        </div>
    ]
}

export default App;