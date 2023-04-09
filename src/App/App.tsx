import '../style/_reset.sass';
import '../style/App.scss';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainePage from '../page/MainPage/MainPage';
import MainFilmPage from '../page/FilmAppPages/MainFilmPage/MainFilmPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainePage />} />
        <Route path="/film" element={<MainFilmPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
