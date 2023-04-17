import { useSearchParams } from "react-router-dom"
import{ useState,useEffect } from 'react'
import FilmHeader from "../../containers/FilmHeader/FilmHeader"
import FilmSerchItem from "../../containers/FilmSerchItem/FilmSerchItem"
import {api_v_2_1, api_v_2_2, getRequest} from '../../scripts/axsios/axsios';
const parseParam = (param:URLSearchParams) => {
    return Object.fromEntries(param)
}
const FilmItemPage = () => {
    const [stateUrl, setUrl] = useState('')
    const [isColorMod, setColor] = useState(false)
    const [serchParam] = useSearchParams()
    console.log(serchParam)
    const valueSerchParam = parseParam(serchParam)
    // getRequest("/search-by-keyword?keyword=%D0%BC%D0%B0%D1%82%D1%80%D0%B8%D1%86%D0%B0&page=1",api_v_2_1)
    useEffect(()=>{
        if(valueSerchParam.colorMod === "false"){
            setColor(false)
        }else {
            setColor(true)
        }
    },[valueSerchParam.colorMod])
    useEffect(()=>{
        (async function () {
            const request = await getRequest(`/${valueSerchParam.id}/videos`,api_v_2_2)
            for (let v of request.items) {
                if(v.site === 'YOUTUBE'){
                    // const youtubeUrl = url.pathname.replace('/', '')
                    
                    // youtubeUrl.split("").reverse().join().substring(0,11)
                    setUrl(v.url.split("").reverse().join().substring(0,11))
                    console.log(v.url.split("").reverse().join('').substring(0,11).split("").reverse().join(''))
                    break
                }
                
            }
            console.log(request)
        })();
    },[valueSerchParam.id])
    const changecolorMod = () => {
        let copyIsColorMod = isColorMod
        if (copyIsColorMod) {
            copyIsColorMod = false
        } else {
            copyIsColorMod = true
        }
        setColor(copyIsColorMod)
    }
    let colorModStyle = isColorMod?'dark':'light';
    return (
        <div className={colorModStyle}>
            <FilmHeader isColorMod={isColorMod} changeColorMod={changecolorMod}/>
            <FilmSerchItem idVideo={stateUrl} isColorMod={isColorMod} />
        </div>
            
        
    )
}
export default FilmItemPage 