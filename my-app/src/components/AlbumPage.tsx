import React from "react";
import { useParams } from "react-router-dom";
import { Artist } from "./Helper";

interface AlbumPageProps {
  artists: Artist[];
}

const AlbumPage: React.FC<AlbumPageProps> = ({ artists }) => {
  const { artistId, albumId } = useParams<{
    artistId: string;
    albumId: string;
  }>();

  const artist = artists.find(
    (artist) => artist.id === parseInt(artistId as string, 10)
  );


  const album = artist?.albums.find((album) => album.albumId === albumId);

  if (!artist || !album) {
    return <div>No Info</div>;
  }

  return (
    <div className="album_page">
      <img
        src={require(`../images/albums/${album.cover}.jpg`)}
        alt={album.title}
        className="coverImg"
      />
      <h4>
        Title: <span>{album.title}</span>
      </h4>
      <h4>
        Year: <span>{album.year}</span>
      </h4>
      <h4>
        Price: <span>{album.price}$</span>
      </h4>
    </div>
  );
};

export default AlbumPage;
