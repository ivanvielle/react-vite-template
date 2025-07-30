import classNames from "classnames";
import styles from "./NavDesktop.module.css";
import useNavScroll from "../../../hooks/useNavScroll";
import Container from "../../Container/Container";

function NavDesktop({ classes, height, changeColorOnScroll, children }) {
    const navbarActive = useNavScroll();
    const { navDesktop, navScrolled } = styles;
    const navClass = classNames(
        navDesktop,
        classes,
        changeColorOnScroll ? (navbarActive ? navScrolled : null) : null
    );

    return <nav className={navClass}>{children}</nav>;
}

export default NavDesktop;
