import classNames from "classnames";
import styles from "./ListItem.module.css";

const ListItem = ({ classes, children }) => {
    const listItemClass = classNames(styles.listItem, classes);

    return <li className={listItemClass}>{children}</li>;
};

export default ListItem;
