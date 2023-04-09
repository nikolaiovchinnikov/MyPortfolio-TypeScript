import CIcon from '@coreui/icons-react';
import  {CButton}  from '@coreui/react'
import  {cilSearch}  from '@coreui/icons';
import styles from './FilmHeader.module.scss';
import '@coreui/coreui/dist/css/coreui.min.css'
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
                        
                        <button className={styles.btnsInput}>
                            <CIcon className={styles.icon} icon={cilSearch}/>
                        </button>
                    </div>
                    <CButton 
                        size='sm'
                        onClick={changeColorMod} 
                        color="dark" 
                        variant="outline">
                        {isColorMod?'Темный режим':'Светлый режим'}
                    </CButton>
                </div>
           </div>
        </header>
                
    )
}
export default FilmHeader