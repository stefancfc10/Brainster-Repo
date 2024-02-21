import React from "react";
import { Link } from "react-router-dom";
import { Artist } from "./Helper";
import ArtistItem from "./ArtistItem";

interface ArtistsListProps {
  artists: Artist[];
}

const  ArtistsList: React.FC<ArtistsListProps> = ({ artists }) => {
  return (
    <div className="dispaly">
      <h2>Browse the artists</h2>
      {artists.map((artist) => (
    <ArtistItem key={artist.id} artist={artist} />
      ))}
    </div>
  );
};

export default  ArtistsList;