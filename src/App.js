import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './app.css'
import SearchForm from './SearchForm';
import dataSource from './dataSource';

//STOPED AT PAGE 7 Step 1


const App = () => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [albumList, setAlbumList] = useState([]);

    const updateSearchResults = (phrase) =>{
        console.log('phrase is: ' + phrase);
        setSearchPhrase(phrase);
    }

    let refresh = false;


    useEffect(() => {
        loadAlbums();
    }, [albumList]);

    const loadAlbums = async () => {
        const response = await dataSource.get('/albums');

        setAlbumList(response.data);
    }
const renderedList = () => {
    return albumList.map((album) => {
        if(album.description.toLowerCase().includes(searchPhrase.toLowerCase()) || searchPhrase ==='')
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
            else console.log('does not match: ' + searchPhrase);
         });
}; 
return <div>
            <div className='container'> <SearchForm onSubmit={updateSearchResults}/></div>
            <div className='container'>{renderedList()}</div >
    </div> ;
};
export default App;