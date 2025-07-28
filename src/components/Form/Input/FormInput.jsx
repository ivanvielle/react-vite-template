import classNames from "classnames";
import styles from "./FormInput.module.css";
import DynamicIcon from "../../Icon/DynamicIcon";

function FormInput({
    ref,
    classes,
    type,
    name,
    placeholder,
    formInputFunc,
    icon,
    iconSize,
    iconColor,
    iconPosition,
    iconFunc,
}) {
    const formInputClass = classNames(styles.formInput, classes);
    const iconContainerClass = classNames(
        styles.iconContainer,
        iconPosition === "start" ? styles.inputIconStart : styles.inputIconEnd
    );

    return (
        <div className={styles.formInputContainer}>
            <div className={iconContainerClass} onClick={iconFunc}>
                {typeof icon !== "undefined" && (
                    <DynamicIcon iconName={icon} size={iconSize} color={iconColor} />
                )}
            </div>
            <input
                ref={ref}
                className={formInputClass}
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onClick={formInputFunc}
            />
        </div>
    );
}

export default FormInput;
