import classNames from "classnames";
import styles from "./FormGroup.module.css";

function FormGroup({ classes, children }) {
    const formGroupClass = classNames(styles.formGroup, classes);

    return <div className={formGroupClass}>{children}</div>;
}

export default FormGroup;
