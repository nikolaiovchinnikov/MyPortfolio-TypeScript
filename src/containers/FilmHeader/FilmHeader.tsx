// import CIcon from '@coreui/icons-react';
// import { cilSearch } from '@coreui/icons';
import styles from './FilmHeader.module.scss';

interface IFilmHeader {
    isColorMod:boolean
    changeColorMod():void
}
const FilmHeader = ({isColorMod, changeColorMod}:IFilmHeader) => {
    // let classColor = isColorMod?'dark':'white';
    // let btnClass = ['btnColor', classColor];
    // console.log(styles)
    return (
        <header className={styles.FilmHeader}>
            <div className="container">
                <div className={styles.filmHeaderBOX}>
                    <div className={styles.Boxlogo}>
                        <img className={styles.logo} src="img/logo.png" alt="logo" />
                        <h3 className={styles.text}>
                            Поиск кино
                        </h3>
                    </div>
                    <div className={styles.BoxSearch}>
                        <input className={styles.input} type="text" />
                        <button className="btnsInput">
                            {/* <CIcon className='header_search_btn_icon' icon={cilSearch}/> */}
                        </button>
                    </div>

                    <button onClick={changeColorMod}>
                        {isColorMod?'Темный режим':'Светлый режим'}
                    </button>
                </div>
           </div>
        </header>
                
    )
}
export default FilmHeader