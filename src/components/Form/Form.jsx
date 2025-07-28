import classNames from "classnames";
import styles from "./Form.module.css";
import Typography from "../Typography/Typography";
import Container from "../Container/Container";

function Form({ classes, formBg, children }) {
    const formClass = classNames(styles.form, styles[formBg], classes);

    return <form className={formClass}>{children}</form>;
}

export default Form;
