import classNames from "classnames";
import styles from "./Footer.module.css";

function Footer({ classes, children }) {
    const footerClass = classNames(styles.footer, classes);

    return <footer className={footerClass}>{children}</footer>;
}

export default Footer;
