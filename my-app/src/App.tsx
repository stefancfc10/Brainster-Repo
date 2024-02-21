import './App.css';
import { Navbar } from './components/Navbar';
import { Routes, Route,Navigate  } from 'react-router-dom';
import artists from './data/db';
import ArtistPage from './components/ArtistPage';
import AlbumPage from './components/AlbumPage';
import ArtistsList from './components/ArtistsList';


function App() {
  return (
    <div className='App'>
     <Navbar/>
      <Routes>
        <Route path='/artists' element = {<ArtistsList artists={artists}/> } />
        <Route path='/artists/:artistId' element = {<ArtistPage artists={artists}/> } />
        <Route path='/artists/:artistId/albums/:albumId' element = {<AlbumPage artists={artists}/> } />
        <Route
        path="*"
        element={<Navigate to="/artists" replace />}
    />
      </Routes>
     
    </div>
  );
}

export default App;
