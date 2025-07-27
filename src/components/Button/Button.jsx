import classNames from "classnames";
import styles from "./Button.module.css";

function Button({ classes, variant, size, type, btnFunc, color, label }) {
    const buttonClass = classNames(styles.btn, styles[variant], styles[size], classes);
    const buttonStyles = {
        color,
    };
    return (
        <button className={buttonClass} type={type} style={buttonStyles} onClick={btnFunc}>
            {label}
        </button>
    );
}

export default Button;
