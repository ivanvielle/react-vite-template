import Typography from "../Typography/Typography";
import styles from "./Loader.module.css";

function Loader() {
    const { loader, circle } = styles;

    return (
        <div className={loader}>
            <Typography variant="h1">Loading</Typography>
            <div className={circle}></div>
            <div className={circle}></div>
            <div className={circle}></div>
        </div>
    );
}

export default Loader;
