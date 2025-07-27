import classNames from "classnames";
import styles from "./Container.module.css";

function Container({ classes, variant, backgroundImg, backgroundColor, children }) {
    const containerStyle = {
        background: backgroundImg,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    };
    const containerClass = classNames(
        styles.container,
        styles[variant],
        styles[backgroundColor],
        classes
    );

    return (
        <div className={containerClass} style={containerStyle}>
            {children}
        </div>
    );
}

export default Container;
