import classNames from "classnames";
import styles from "./FormInput.module.css";

function FormInput({ classes, variant, name, placeholder, formInputFunc }) {
    const formInputClass = classNames(styles.formInput, classes);

    return (
        <div className={styles.formContainer}>
            <input
                className={formInputClass}
                type={variant}
                name={name}
                id={name}
                placeholder=" "
                onChange={formInputFunc}
            />
            <label htmlFor="" className={styles.formLabel}>
                Text
            </label>
        </div>
    );
}

export default FormInput;
