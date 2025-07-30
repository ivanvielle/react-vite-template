import classNames from "classnames";

function OrderedList({ classes, children }) {
    const listClass = classNames(classes);

    return <ol className={listClass}>{children}</ol>;
}

export default OrderedList;
