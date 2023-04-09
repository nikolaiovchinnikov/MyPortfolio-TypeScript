import '../style/_reset.sass';
import '../style/App.scss';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainePage from '../page/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
