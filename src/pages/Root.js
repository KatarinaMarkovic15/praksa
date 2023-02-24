import { Outlet } from "react-router-dom";

import NavBarComp from "../components/NavBarComp";
import FootBarComp from "../components/FootBarComp";

function RootLayout() {
    return (<>
        <NavBarComp />
        <main>
            <Outlet />
        </main>
        <FootBarComp />
    </>);
};

export default RootLayout;