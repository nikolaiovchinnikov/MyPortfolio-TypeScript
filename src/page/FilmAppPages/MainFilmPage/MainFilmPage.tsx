// import style from './MainFilmPage.module.scss'
import { useState } from 'react'
import FilmHeader from '../../../components/FilmHeader/FilmHeader';
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

    return (
        <>
            <FilmHeader
                isColorMod={isColorMod}
                changeColorMod={changecolorMod}
            />
            <div className={isColorMod?'dark':'light'}>
                <MainItemFilm isColorMod={isColorMod} />
                <FilmItemGrid/>
                <FilmNewsTops/>
            </div>
            
        </>
    )
}
export default MainFilmPage;