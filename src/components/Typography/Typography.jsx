import classNames from "classnames";
import styles from "./Typography.module.css";

function Typography({ classes, variant, children }) {
    const Tag = variant;
    const typographyClass = classNames(styles.typography, styles[variant], classes);

    return <Tag className={typographyClass}>{children}</Tag>;
}

export default Typography;
