import classNames from "classnames";
import styles from "./Container.module.css";

function Container({ display, direction, height, width, children }) {
    const containerClass = classNames(
        styles.container,
        styles[display],
        styles[direction],
        styles[height],
        styles[width]
    );

    return <div className={containerClass}>{children}</div>;
}

function GridContainer({ direction, cols, rows, height, width, children }) {
    const gridContainerClass = classNames(
        styles.container,
        styles.grid,
        styles[direction],
        styles[cols],
        styles[rows],
        styles[height],
        styles[width]
    );

    return <div className={gridContainerClass}>{children}</div>;
}

export { Container, GridContainer };
