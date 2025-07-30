import { Link } from "react-router-dom";
import classNames from "classnames";

function Brand({ classes, brand, color }) {
    const brandClass = classNames(classes);

    return (
        <div className={brandClass}>
            <Link className={color} to="/">
                {brand}
            </Link>
        </div>
    );
}

export default Brand;
