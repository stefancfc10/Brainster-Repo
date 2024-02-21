import React from "react";
import { Link, useParams } from "react-router-dom";
import { Artist } from "./Helper";
import AlbumsList from "./AlbumsList";

interface ArtistPageProps {
  artists: Artist[];
}

const ArtistPage: React.FC<ArtistPageProps> = ({ artists }) => {
  const { artistId } = useParams<{ artistId: string }>();
  const id = artistId ? parseInt(artistId, 10) : undefined;

  const artist = artists.find((artist) => artist.id === id);

  if (!artist) {
    return <div>No Info</div>;
  }

  return (
    <div className="artist_page">
      <img
        src={require(`../images/covers/${artist.cover}.jpg`)}
        alt={artist.name}
        className="coverImg"
      />
      <h2>{artist.name}</h2>
      <br />
      <p>{artist.bio}</p>

      <AlbumsList albums={artist.albums} artistId={artist.id} />


    </div>
  );
};

export default ArtistPage;
