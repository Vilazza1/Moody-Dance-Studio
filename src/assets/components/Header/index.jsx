import { Link } from "react-router";
import logo from "./logo.png";
import styles from "./Header.module.css";
import HeaderLinks from "../HeaderLinks";     

function Header() {
    return(
        <header className={styles.header}>
            <Link to="./">
                <img src={logo} alt="Logo" className={styles.logo} />
            </Link>
            <nav>
                <HeaderLinks url="/">Home</HeaderLinks>
                <HeaderLinks url="/">Classes</HeaderLinks>
                <HeaderLinks url="/">About</HeaderLinks>
                <HeaderLinks url="https://maps.app.goo.gl/gV3NjU1Bw9jjGciT8">224 Nostrand Ave, Brooklyn, NY</HeaderLinks>
            </nav>
        </header>
    )
}

export default Header;