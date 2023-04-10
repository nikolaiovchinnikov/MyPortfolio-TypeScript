import styles from "./MainItemFilm.module.scss"
import  {
    CCard,
    CRow,
    CCol,
    CCardTitle,
    CCardBody,
    CCardText
} from '@coreui/react'
// import FilmCard from "../ImgBlockGrid/FilmsCard/FilmCard";
// import { useState,useEffect } from "react";
// import { getRespons } from "../../../scripts/ajaxMetods";

interface IFilmApi {
    isColorMod:boolean
}
// let isStatus = true
const MainItemFilm = ({isColorMod}:IFilmApi) => {
    // const [ IdFilms, setIdFilms ] = useState({} as IFilmApi)
    // let urlPremiere = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/301'
    // useEffect (() => {
    //     const getIdFilms = async ():Promise<void> => {
    //         const response = await getRespons(urlPremiere)
    //         .catch(err => console.log(err))
    //         setIdFilms(response)
    //         console.log(response)
    //     }
    //     if(isStatus){
    //         getIdFilms()
    //         isStatus = false
    //     }
    // },[urlPremiere])
    return (
        <div className={[styles.boxItemImg,'myContainer'].join(' ')}>
            <CCard style={{border:'none'}} className={["my-5 ",isColorMod?'dark':'light'].join(" ")}>
                <CRow className="g-0">
                <CCol md={4}>
                    <div className={styles.img} style={{backgroundImage:`url(${"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdv61p5TcNGsQEKW8B9L0neRCcKxQ5Xzzmv-Kfir1A&s"})`}}>
                    </div>
                </CCol>
                <CCol md={8}>
                    <CCardBody>
                    <CCardTitle className={[styles.textTop].join(' ')}>Матрица</CCardTitle>
                    <CCardText className={styles.textMid}>
                        This is a wider card with supporting text below as a natural lead-in to additional
                        content. This content is a little bit longer.
                    </CCardText>
                    <CCardText>
                        <small>Last updated 3 mins ago</small>
                    </CCardText>
                    </CCardBody>
                </CCol>
                </CRow>
            </CCard>
        </div>
    )
}
export default MainItemFilm