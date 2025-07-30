import { Link } from "react-router-dom";
import classNames from "classnames";
import styles from "./AppLink.module.css";

const AppLink = ({ classes, color, fontWeight, to, target, children }) => {
    const appLinkClass = classNames(styles.appLink, styles[color], classes);
    const appLinkWeight = {
        fontWeight,
    };

    return (
        <Link className={appLinkClass} to={to} target={target} style={appLinkWeight}>
            {children}
        </Link>
    );
};

export default AppLink;
