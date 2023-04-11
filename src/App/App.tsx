import '../style/_reset.sass';
import '../style/App.scss';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainePage from '../page/MainPage/MainPage';
import MainFilmPage from '../page/FilmAppPages/MainFilmPage/MainFilmPage';
import FilmItemPage from '../page/FilmItemPage/FilmItemPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainePage />} />
        <Route path="/film" element={<MainFilmPage />} />
        <Route path="/film/item" element={<FilmItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
