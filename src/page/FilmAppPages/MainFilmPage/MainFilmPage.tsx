// import style from './MainFilmPage.module.scss'
import { useState } from 'react'
import FilmHeader from '../../../containers/FilmHeader/FilmHeader';
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
        </>
    )
}
export default MainFilmPage;