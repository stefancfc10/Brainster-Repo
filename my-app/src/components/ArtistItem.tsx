import React from "react";
import { Link } from "react-router-dom";
import { Artist } from "./Helper";

interface ArtistItemProps {
  artist: Artist;
}

const  ArtistItem: React.FC<ArtistItemProps> = ({ artist}) => {
  return (
    <div className="homepage">
      
        <div className="render">
          <Link to={`/artists/${artist.id}`}>
            <img
              src={require(`../images/covers/${artist.cover}.jpg`)}
              alt={artist.name}
             
            />
          </Link>
          <p className="name_artist">{artist.name}</p>
        </div>
    </div>
  );
};

export default  ArtistItem;