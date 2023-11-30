import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const AlbumList = (props) => {
    const handleSectionOne = (albumId, uri) =>{
        console.log('Selected Id is' + albumId);
        props.onClick(albumId, navigator, uri);
    };
    console.log('props albumList', props);
    const navigator = useNavigate();
    const albums = props.albumList.map((album) =>{
        return (
            < Card key = {album.albumId} 
            albumId= {album.albumId}
            albumTitle = {album.title}
            albumDescription = {album.description}
            buttonText = 'OK'
            imgURL = {album.image}
            onClick={handleSectionOne}
            />
        );
    });
    return <div className="container">{albums}</div>
}

export default AlbumList;