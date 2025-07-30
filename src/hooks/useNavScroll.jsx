import { useState, useEffect } from "react";

function useNavScroll() {
    const [navbarActive, setNavbarActive] = useState(false);

    function changeNavColor() {
        if (window.scrollY >= 80) {
            setNavbarActive(true);
        } else {
            setNavbarActive(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeNavColor);

        return () => {
            window.removeEventListener("scroll", changeNavColor);
        };
    }, []);

    return navbarActive;
}

export default useNavScroll;
