import './MainePage.scss';
import { useNavigate } from 'react-router-dom';
const MainePage = () => {
    
    const navigate = useNavigate();
    const directionPage = () => navigate('/film');

    return (
        <div>
            <button onClick={directionPage}>
                фильмы
            </button>
        </div>
    )
}
export default MainePage;