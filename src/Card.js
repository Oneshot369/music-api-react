import React from 'react';
import ReactDOM from 'react-dom';

const Card = (props) => {
    const handleButtonClick = (event, uri) =>{
        console.log("Id clicked is " + props.albumId);
        props.onClick(props.albumId, uri);
    }
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
            <img src={props.imgURL} className="card-img-top" alt="name" />
                <div className="card-body">
                    <h5 className="card-title">{props.albumTitle}</h5>
                    <p className="card-text">
                        {props.albumDescription}
                    </p>
                    <button className="btn btn-primary" onClick={() =>handleButtonClick(props.albumId, '/show/')}>{props.buttonText}</button>
                    <button className="btn btn-primary" onClick={() =>handleButtonClick(props.albumId, '/edit/')}>Edit</button>
                </div>
            </div>
        </div>
    );
}

export default Card;