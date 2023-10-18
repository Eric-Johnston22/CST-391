import React, { useState } from "react";
import Card from './Card';
import './App.css';


const App = () => {
    const [albumList, setAlbumList] = useState([
        {
            artistId: 0,
            artist: 'Modest Mouse',
            title: 'The Lonesome Crowded West',
            description: "The critically acclaimed second full length LP from Modest Mouse",
            year: 1997,
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/MMLonesomeCrowdedWest.jpg/220px-MMLonesomeCrowdedWest.jpg"
        },
        {
            artistId: 1,
            artist: 'Coheed and Cambria',
            title: "Good Apollo I'm Burning Start IV, Volume One: From Fear Through the Eyes of Madness",
            description: "The band's third entry and first album released on a major record label",
            year: 2005,
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Good_Apollo.jpg/220px-Good_Apollo.jpg"
        },
        {
            artistId: 2,
            artist: 'The Shins',
            title: 'Wincing the Night Away',
            description: "The third studio album by indie rock group The Shins.",
            year: 2007,
            image: "https://upload.wikimedia.org/wikipedia/en/7/7f/Wincing_the_Night_Away.jpg"
        },
    ]);

    const renderedList = () => {
        return albumList.map((album) => {
            return (
                <Card
                    albumTitle={album.title}
                    albumDescription={album.description}
                    buttonText='OK'
                    imgURL={album.image}
                />
            );
        });
    };
    return <div className="container">{renderedList()}</div>;
};

export default App;