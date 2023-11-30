import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import dataSource from "./dataSource";

const NewAlbum = (props) => {
    const [albumTitle, setAlbumTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [description, setDescription] = useState('');
    const [year, setYear] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const updateTitle = (event) =>{
        setAlbumTitle(event.target.value);
    };
    const updateArtist = (event) =>{
        setArtist(event.target.value);
    };
    const updateDescription = (event) =>{
        setDescription(event.target.value);
    };
    const updateYear = (event) =>{
        setYear(event.target.value);
    };
    const updateImage = (event) =>{
        setImage(event.target.value);
    };

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        console.log("submit");

        const album={
            title: albumTitle,
            artist: artist,
            description: description,
            year: year,
            image: image,
            tracks: [],
        }
        console.log(album);

        saveAlbum(album);
    }

    const saveAlbum = async (album) =>{
        const responce = await dataSource.post('/albums', album);
        console.log("here",responce);
        console.log(responce.data);
        props.onNewAlbum(navigate);
    }

    const handleCancel= () =>{
        navigate("/");
    }

    return <div>
        <form className="container" onSubmit={handleFormSubmit}>
            <h1>Create Album</h1>
            <div className="mb-3 container">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Album Title
                </label>
                <input
                    onChange={updateTitle}
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                />
            </div>
            <div className="mb-3 container">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Artist
                </label>
                <input
                    onChange={updateArtist}
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                />
            </div>
            <div className="mb-3 container">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Description
                </label>
                <input
                    onChange={updateDescription}
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                />
            </div>
            <div className="mb-3 container">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Year
                </label>
                <input
                    onChange={updateYear}
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                />
            </div>
            <div className="mb-3 container">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Image
                </label>
                <input
                    onChange={updateImage}
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                />
            </div>
            <button type="button" className="btn btn-primary " onClick={handleCancel}>
                Cancel
            </button>
            <button type="submit" className="btn btn-primary ">
                Submit
            </button>
        </form>

    </div>;
};
export default NewAlbum;