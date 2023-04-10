import CIcon from '@coreui/icons-react';
import  {
    CButton, 
    CFormInput, 
    CDropdown, 
    CDropdownToggle, 
    CDropdownMenu, 
    CDropdownItem,
    CDropdownDivider
} from '@coreui/react'
import  {cilSearch}  from '@coreui/icons';
import styles from './FilmHeader.module.scss';
import '@coreui/coreui/dist/css/coreui.min.css'
import { IFilmHeader } from '../../interface/interfaceApp';


const FilmHeader = ({isColorMod, changeColorMod}:IFilmHeader) => {

    let colorModStyle = isColorMod?'dark':'light';
    return (
        <header className={[styles.FilmHeader, colorModStyle].join(' ')}>
            <div className="myContainer">
                <div className={styles.filmHeaderBOX}>
                    <CDropdown alignment={{ lg: 'start' }} variant="btn-group" dark={isColorMod}>
                        <div className={styles.Boxlogo}>
                            <CDropdownToggle color={isColorMod?'dark':'light'}>
                                <img className={styles.logo} src="img/logo.png" alt="logo" />
                            </CDropdownToggle>
                            <h3 className={[styles.text,colorModStyle].join(' ')}>
                                Поиск кино
                            </h3>
                        </div>
                        <CDropdownMenu>
                            <CDropdownItem href="#">Action</CDropdownItem>
                            <CDropdownItem href="#">Another action</CDropdownItem>
                            <CDropdownItem href="#">Something else here</CDropdownItem>
                            <CDropdownDivider />
                            <CDropdownItem href="#">Separated link</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>

                    <div className={styles.BoxSearch}>
                        <CFormInput
                        style={{width:'340px'}}
                        type="text"
                        size="sm"
                        placeholder="Введите запрос"
                        aria-label="sm input example"
                        label={
                        <button className={styles.btnsInput}>
                            <CIcon icon={cilSearch}/>
                        </button>}
                        />
                    </div>

                    <CButton 
                        style={{width:'150px'}}
                        size='sm'
                        onClick={changeColorMod} 
                        color={!isColorMod ? 'dark' : 'light'} 
                        variant="outline">
                        {!isColorMod ? 'Темный режим' : 'Светлый режим'}
                    </CButton>
                </div>
           </div>
        </header>
    )
}
export default FilmHeader