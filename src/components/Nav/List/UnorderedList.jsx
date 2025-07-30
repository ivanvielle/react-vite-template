import classNames from "classnames";

function UnorderedList({ classes, children }) {
    const listClass = classNames(classes);

    return <ul className={listClass}>{children}</ul>;
}

export default UnorderedList;
