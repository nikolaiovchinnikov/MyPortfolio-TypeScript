// import FilmCard from '../FilmsCard/FilmCard';
import styles from './FilmItemGrid.module.scss'
// import { useState,useEffect } from "react";
// import ContainerCard from "../ContinerCard/ContinerCard";
// import { getRespons } from "../../../../scripts/ajaxMetods";
// interface IFilmApi {
//     posterUrlPreview:string,
//     filmId:number
// }
// let isStatus = true
const FilmItemGrid = () => {
    // const [ films, setFilms ] = useState([[],[],[],[]] as IFilmApi[][] )
    // let urlFilms = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1'
    // const splitArray = (arr:any[]):any[] => {
    //     const [oneArr, twoArr, threeArr, fourArr] = [[], [], [], []] as any[][];
    //     for (let index = 0; index < arr.length; index++) {
    //         if(index <= 4) {
    //             oneArr.push(arr[index])
    //         }else if(index <= 9) {
    //             twoArr.push(arr[index])
    //         }else if(index <= 14) {
    //             threeArr.push(arr[index])
    //         }else if(index <= 19) {
    //             fourArr.push(arr[index])
    //         }
            
    //     }
    //     return [oneArr, twoArr, threeArr, fourArr]
    // }
    // useEffect (() => {
    //     const getFilms = async ():Promise<void> => {
    //         const response = await getRespons(urlFilms)
    //         .catch(err => console.log(err))
    //         const filmItems = response.films
    //         const multiArr = splitArray(filmItems)
    //         setFilms(multiArr)
    //         console.log(multiArr)
    //     }
    //     if (isStatus){
    //         getFilms()
    //         isStatus = false
    //     }
    // },[urlFilms])
   
    
    
    
    return (
                <div className='my-5 myContainer' style={{display:'flex',flexDirection: 'column'}} >
                    <div className={styles.containerCard}>
                        {[1,2,3,4,5].map((value => {
                            return <div 
                            style={{backgroundImage:`url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdv61p5TcNGsQEKW8B9L0neRCcKxQ5Xzzmv-Kfir1A&s'})`}} 
                            className={[styles.card, styles.top, styles.shadowTop].join(' ')}
                            key={value}>
                        </div>
                        }))}
                    </div>
                    <div className={styles.containerCard}>
                        {[1,2,3,4,5].map((value => {
                            return <div 
                            style={{backgroundImage:`url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdv61p5TcNGsQEKW8B9L0neRCcKxQ5Xzzmv-Kfir1A&s'})`}} 
                            className={[styles.card, styles.bot].join(' ')}
                            key={value}>
                        </div>
                        }))}
                    </div>
                    <div className={styles.containerCard}>
                        {[1,2,3,4,5].map((value => {
                            return <div 
                            style={{backgroundImage:`url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdv61p5TcNGsQEKW8B9L0neRCcKxQ5Xzzmv-Kfir1A&s'})`}} 
                            className={[styles.card, styles.top].join(' ')}
                            key={value}>
                        </div>
                        }))}
                    </div>
                    <div className={styles.containerCard}>
                        {[1,2,3,4,5].map((value => {
                            return <div 
                            style={{backgroundImage:`url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdv61p5TcNGsQEKW8B9L0neRCcKxQ5Xzzmv-Kfir1A&s'})`}} 
                            className={[styles.card, styles.bot, styles.shadowBot].join(' ')}
                            key={value}>
                        </div>
                        }))}
                    </div>
                </div>
    )
}
export default FilmItemGrid