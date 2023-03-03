
import { Link } from "react-router-dom";
import style from "./Nav.module.css"


const Nav = ({logOut}) => {
    return(
        <nav>
            <div className={style.navigation} >
            <Link to={"/about"} className={style.link}>
                <h1 className={style.barra} >About</h1>
            </Link>
            <Link to={"/home"} className={style.link}>
                <h1 className={style.barra} >Home</h1>
            </Link>
            <Link to={"/favorites"} className={style.link}>
                <h1 className={style.barra} >Favorites</h1>
            </Link>
            <button className={style.button1} onClick={logOut}>Log Out</button>
            </div>
        </nav>

    )
}

export default Nav;