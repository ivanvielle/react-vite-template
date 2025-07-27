import classNames from "classnames";
import styles from "./Button.module.css";

function Button({ classes, variant, size, type, btnFunc, children }) {
    const buttonClass = classNames(styles.btn, styles[variant], styles[size], classes);

    return (
        <button className={buttonClass} type={type} onClick={btnFunc}>
            {children}
        </button>
    );
}

export default Button;
