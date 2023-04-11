import CIcon from '@coreui/icons-react';
import { useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import {
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
    const navigate = useNavigate();
    const directionPage = (e:React.MouseEvent<HTMLButtonElement>) => {
        let inputElement = e.currentTarget.parentNode?.nextSibling as HTMLInputElement;
        const param = createSearchParams({name: inputElement.value,colorMod:String(isColorMod)})
        console.log(param.toString())
        navigate({
            pathname:'/film/item',
            search: '?' + param.toString()
        });

    }
    
    const [isShowDropdown, setIsShowDropdown] = useState(false)
    const chengeShowDropdown = () => {
        let copyIsShowDropdown = isShowDropdown;
        copyIsShowDropdown = true
        setIsShowDropdown(copyIsShowDropdown)
    }
    const chengeHidenDropdown = () => {
        let copyIsShowDropdown = isShowDropdown;
        copyIsShowDropdown = false
        setIsShowDropdown(copyIsShowDropdown)
    }
    let specialCase = isColorMod? styles.showDrop : styles.showDropWhite
    let colorModStyle = isColorMod?'dark':'light';
    return (
        <header className={[styles.FilmHeader, colorModStyle].join(' ')}>
            <div className="myContainer">
                <div className={styles.filmHeaderBOX}>
                    <CDropdown 
                    onHide={chengeHidenDropdown}
                    onShow={chengeShowDropdown} 
                    alignment={{ lg: 'start' }} 
                    variant="btn-group" 
                    dark={isColorMod}>
                        <div className={[styles.Boxlogo, isShowDropdown ? specialCase : ""].join(" ")}>
                            <CDropdownToggle color={isColorMod?'dark':'light'}>
                                <img className={styles.logo} src="/img/Logo.png" alt="logo" />
                            </CDropdownToggle>
                            <h3 
                            className={
                            [styles.text, isShowDropdown ? specialCase : colorModStyle]
                            .join(' ')}>
                            Поиск кино
                            </h3>
                        </div>
                        <CDropdownMenu style={{width:'100%'}} >
                            <CDropdownItem href="#">Action</CDropdownItem>
                            <CDropdownItem href="#">Another action</CDropdownItem>
                            <CDropdownItem href="#">Something else here</CDropdownItem>
                            <CDropdownDivider />
                            <CDropdownItem href="#">Separated link</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>

                    <div className={styles.BoxSearch}>
                        <CFormInput
                        className={colorModStyle}
                        style={{border:isColorMod?"1px solid #fff":"1px solid #000",width:'340px'}}
                        type="text"
                        size="sm"
                        placeholder="Введите запрос"
                        aria-label="sm input example"
                        label={
                        <button onClick={(e) => directionPage (e)} className={styles.btnsInput}>
                            <CIcon style={{color:isColorMod?"#fff":"#000"}} icon={cilSearch}/>
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