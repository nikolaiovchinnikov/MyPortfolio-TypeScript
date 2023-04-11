import { useSearchParams } from "react-router-dom"
const FilmItemPage = () => {
    const [serchParam] = useSearchParams()
    const parseParam = (param:URLSearchParams) => {
        return Object.fromEntries(param)
    }
    console.log(parseParam(serchParam))
    return (
        <div>
            <div></div>
        </div>
    )
}
export default FilmItemPage 