// import style from './MainFilmPage.module.scss'
import { useState, useEffect } from 'react';
import {api_v_2_1, api_v_2_2, getRequest} from '../../../scripts/axsios/axsios';
import FilmHeader from '../../../containers/FilmHeader/FilmHeader';
import MainItemFilm from '../../../containers/MainItemFilm/MainItemFilm';
import FilmItemGrid from '../../../containers/FilmItemGrid/FilmItemGrid';
import FilmNewsTops from '../../../containers/FilmNewsTops/FilmNewsTops';
const MainFilmPage = () => {
    const [isColorMod, setColor] = useState(false)
    const changecolorMod = () => {
        let copyIsColorMod = isColorMod
        if (copyIsColorMod) {
            copyIsColorMod = false
        } else {
            copyIsColorMod = true
        }
        setColor(copyIsColorMod)
    }
    useEffect(() => {
        // getRequest("/search-by-keyword?keyword=%D0%BC%D0%B0%D1%82%D1%80%D0%B8%D1%86%D0%B0&page=1",api_v_2_1)
        // getRequest("/top?type=TOP_250_BEST_FILMS&page=1",api_v_2_2)
        
       
    },[])
    return (
        <>
            <FilmHeader
                isColorMod={isColorMod}
                changeColorMod={changecolorMod}
            />
            <div className={isColorMod?'dark':'light'}>
                <MainItemFilm isColorMod={isColorMod} />
                <FilmItemGrid isColorMod={isColorMod} />
                <FilmNewsTops isColorMod={isColorMod} />
            </div>
            
        </>
    )
}
export default MainFilmPage;