import { Outlet } from "react-router-dom";
import Container from "../components/Container/Container";
import NavDesktop from "../components/Nav/Desktop/NavDesktop";

import Footer from "../components/Footer/Footer";

function RootLayout() {
    return (
        <Container classes="min-h-100" backgroundColor="transparent">
            {/* Navbar - Desktop */}
            <NavDesktop changeColorOnScroll={true} />

            <Outlet />

            {/* Footer */}
            <Footer classes="border-1">footer</Footer>
        </Container>
    );
}

export default RootLayout;
