import React from "react";

const Card = (props) => {
    const handleButttonClick = (event, uri) => {
        console.log('ID clicked is ' + props.albumId);
        props.onClick(props.albumId, uri);
    }
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={props.imgURL} className="card-img-top" alt="Image name" />
            <div className="card-body">
                <h5 className="card-title">{props.albumTitle}</h5>
                <p className="card-text"> {props.albumDescription}</p>
                <button className="btn btn-primary" onClick={() => handleButttonClick(props.albumId, '/show/')}>{props.buttonText}</button>
                <button className="btn btn-secondary" onClick={() => handleButttonClick(props.albumId, '/edit/')}>Edit</button>
            </div>
        </div>
    );

}
export default Card