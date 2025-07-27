import lazyWrapper from "../utils/lazyWrapper";

// Layouts
import RootLayout from "../layouts/RootLayout";

// Pages
const Landing = () => lazyWrapper(() => import("../pages/LandingPage"));

const routes = [
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Landing />,
            },
        ],
    },
];

export default routes;
