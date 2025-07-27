import { Outlet } from "react-router-dom";
import Container from "../components/Container/Container";

function RootLayout() {
    return (
        <Container classes="min-h-100" variant="container-base">
            <Outlet />
        </Container>
    );
}

export default RootLayout;
