import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './app.css'
import dataSource from './dataSource';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SearchAlbum from './SearchAlbum';
import NavBar from './NavBar';
import EditAlbum from './EditAlbum';
import OneAlbum from './OneAlbum';

const App = () => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [albumList, setAlbumList] = useState([]);
    const [currentlySelectedAlbumId, setCurrentlySelectedAlbumId] = useState(0);
    
    let refresh = false;

    const loadAlbums = async () => {
        const response = await dataSource.get('/albums');
        
        setAlbumList(response.data);
    }
    
    const updateSearchResults = (phrase) =>{
        console.log('phrase is: ' + phrase);
        setSearchPhrase(phrase);
    }

    useEffect(() => {
        loadAlbums();
    }, [refresh]);

const renderedList = albumList.filter((album) => {
    if(album.description.toLowerCase().includes(searchPhrase.toLowerCase()) || searchPhrase ===''){
        return true;
    }
    return false;
})  

const updateSingleAlbum = (id, navigate, uri) =>{
    console.log('Update single album = ', id);
    console.log('Update single album = ', navigate);

    //TODO: this is allways returning 0 for currently selected album
    var indexNumber = 0;
    for(var i = 0 ; i < albumList.length; ++i){
        if(albumList[i].id === id) indexNumber = i;
    }
    setCurrentlySelectedAlbumId(indexNumber);
    let path = uri + id;
    console.log("path", path)
    console.log("Current album", currentlySelectedAlbumId);
    navigate(path)
}

const onNewAlbum = (navigate) =>{
    loadAlbums();
    navigate("/");
}

return (
    <BrowserRouter>
    <NavBar />
        <Routes>
            <Route
                exact
                path='/'
                element={
                    <SearchAlbum 
                    updateSearchResults={updateSearchResults}
                    albumList={renderedList}
                    updateSingleAlbum={updateSingleAlbum}
                    />
                }/>
                <Route exact path='/new' element={<EditAlbum onNewAlbum={onNewAlbum}/>} />
                <Route exact path='/edit/:albumId' element={<EditAlbum onNewAlbum={onNewAlbum} album={albumList.currentlySelectedAlbumId}/>} />
                <Route
                    exact
                    path='/show/:albumId'
                    element={
                        <OneAlbum album={albumList[currentlySelectedAlbumId]} />
                    }
                />
        </Routes>
    </BrowserRouter>
);
};
export default App;