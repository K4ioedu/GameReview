import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GameDetailsPage from './pages/GameDetailsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path = "/game/:id" element ={<GameDetailsPage />}/>
    </Routes>
  );
}

export default App;