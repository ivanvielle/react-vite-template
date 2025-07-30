import classNames from "classnames";
import styles from "./NavDesktop.module.css";
import useNavScroll from "../../../hooks/useNavScroll";
import Container from "../../Container/Container";
import Brand from "../Brand/Brand";
import UnorderedList from "../List/UnorderedList";
import ListItem from "../List/ListItem/ListItem";
import AppLink from "../../Link/AppLink";

function NavDesktop({ classes, changeColorOnScroll }) {
    const navbarActive = useNavScroll();
    const { navDesktop, navScrolled } = styles;
    const navClass = classNames(
        navDesktop,
        classes,
        changeColorOnScroll ? (navbarActive ? navScrolled : null) : null
    );

    return (
        <nav className={navClass}>
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
        </nav>
    );
}

export default NavDesktop;
