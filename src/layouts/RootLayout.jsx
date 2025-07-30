import { Outlet, Link } from "react-router-dom";
import Container from "../components/Container/Container";
import NavDesktop from "../components/Nav/Desktop/NavDesktop";
import Brand from "../components/Nav/Brand/Brand";
import UnorderedList from "../components/Nav/List/UnorderedList";
import ListItem from "../components/Nav/List/ListItem/ListItem";
import AppLink from "../components/Link/AppLink";

function RootLayout() {
    return (
        <Container classes="min-h-100" backgroundColor="transparent">
            {/* Navbar - Desktop */}
            <NavDesktop
                classes=" h-5 max-w-3xl m-auto d-flex flex-align-center"
                changeColorOnScroll={true}
            >
                <Brand
                    classes=" h-full w-10 align-content-center text-2xl "
                    brand={"PEW"}
                    color="text-primary"
                />
                <UnorderedList classes=" h-full flex-1 d-flex flex-justify-center flex-align-center gap-1">
                    <ListItem classes="w-20 text-center">
                        <AppLink classes="px-3 py-1 border-radius-1" to="#" color="primary">
                            About
                        </AppLink>
                    </ListItem>
                    <ListItem classes="w-20 text-center">
                        <AppLink classes="px-3 py-1 border-radius-1" to="#" color="primary">
                            Features
                        </AppLink>
                    </ListItem>
                    <ListItem classes="w-20 text-center">
                        <AppLink classes="px-3 py-1 border-radius-1" to="#" color="primary">
                            Services
                        </AppLink>
                    </ListItem>
                    <ListItem classes="w-20 text-center">
                        <AppLink classes="px-3 py-1 border-radius-1" to="#" color="primary">
                            Contact
                        </AppLink>
                    </ListItem>
                </UnorderedList>
                <Container classes="h-full w-20 d-flex flex-align-center flex-justify-space-around gap-1 px-2">
                    <AppLink
                        classes="border-2 w-50 text-center py-1 border-radius-1"
                        color="primary"
                        fontWeight="600"
                    >
                        Login
                    </AppLink>
                    <AppLink
                        classes="border-2 w-50 text-center py-1 border-radius-1"
                        color="success"
                        fontWeight="600"
                    >
                        Register
                    </AppLink>
                </Container>
            </NavDesktop>
            <Outlet />
        </Container>
    );
}

export default RootLayout;
