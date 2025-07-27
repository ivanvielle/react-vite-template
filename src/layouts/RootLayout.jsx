import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function RootLayout() {
    const {} = styles;

    return <div>{Outlet}</div>;
}

export default RootLayout;
