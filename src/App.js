import {Routes, Route} from 'react-router-dom'
import List from './pages/list/List';
import Login from './pages/login/Login';
import SpotifyAuth from './pages/spotify-auth/SpotifyAuth';

function App() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/login" element={<Login />} />
      <Route path="/spotify-auth" element={<SpotifyAuth />} />
      <Route path="/spotify-callback" element={<SpotifyAuth />} />
    </Routes>
  )
}

export default App;
