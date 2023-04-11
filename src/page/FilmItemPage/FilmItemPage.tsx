import { useSearchParams } from "react-router-dom"
import{ useState,useEffect } from 'react'
import FilmHeader from "../../containers/FilmHeader/FilmHeader"
import FilmSerchItem from "../../containers/FilmSerchItem/FilmSerchItem"
const parseParam = (param:URLSearchParams) => {
    return Object.fromEntries(param)
}
const FilmItemPage = () => {
    const [isColorMod, setColor] = useState(false)
    const [serchParam] = useSearchParams()
    const valueSerchParam = parseParam(serchParam)
    useEffect(()=>{
        if(valueSerchParam.colorMod === "false"){
            setColor(false)
        }else {
            setColor(true)
        }
    },[valueSerchParam.colorMod])
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
        <div>
            <FilmHeader isColorMod={isColorMod} changeColorMod={changecolorMod}/>
            <FilmSerchItem/>
        </div>
    )
}
export default FilmItemPage 