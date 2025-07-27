import classNames from "classnames";
import styles from "./Container.module.css";

function Container({ classes, variant, background, children }) {
    const containerStyle = {
        background,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    };
    const containerClass = classNames(styles[variant], classes);

    return (
        <div className={containerClass} style={containerStyle}>
            {children}
        </div>
    );
}

export default Container;
