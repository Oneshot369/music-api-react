import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './app.css'
import albums from './albums.json'
import SearchForm from './SearchForm';

const App = () => {
    const [albumList, setAlbumList] = useState([]);

    useEffect(() => {
        setAlbumList(albums);
    }, [albumList]);

const renderedList = () => {
    return albumList.map((album) => {
        return ( < Card key = {album.artistId} albumTitle = {
                album.title
            }
            albumDescription = {
                album.description
            }
            buttonText = 'OK'
            imgURL = {
                album.image
            }
            /> );
         });
         }; 
return <div>
            <div className='container'> <SearchForm/></div>
            <div className='container'>{renderedList()}</div >
    </div> ;
};
export default App;