import { Link } from "react-router-dom"
import { RouteConst } from "../../interface/RouteConst"

export const Homepage = () => {
   
    
    return <>
    홈페이지 입니다만?
    <Link to={RouteConst.LandingPage}>눌러볼래?</Link>
    </>
}