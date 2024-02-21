import React from "react";
import { Link } from "react-router-dom";
import { Album } from "./Helper";
import ArtistItem from "./ArtistItem";

interface AlbumsListProps {
  albums: Album[];
  artistId: number;
}

const  AlbumsList: React.FC<AlbumsListProps> = ({ albums,artistId }) => {
  return (
    <div className="album">
    {albums.map((album) => (
      <Link
        key={album.albumId}
        to={`/artists/${artistId}/albums/${album.albumId}`}
      >
        <img
          src={require(`../images/albums/${album.cover}.jpg`)}
          alt={album.cover}
        />
      </Link>
    ))}
  </div>
  );
};

export default  AlbumsList;