// import style from './MainFilmPage.module.scss'
import { useState } from 'react'
import FilmHeader from '../../../components/FilmHeader/FilmHeader';
import MainItemFilm from '../../../containers/MainItemFilm/MainItemFilm';
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
            </div>
            
        </>
    )
}
export default MainFilmPage;