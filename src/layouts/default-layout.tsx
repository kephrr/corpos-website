import {Outlet} from "react-router-dom";
import NavBar from "../components/ui-ux/navabar.tsx";
import Footer from "../components/ui-ux/footer.tsx";


const Default = () => {
    return (
        <div className="box-border">
            <NavBar></NavBar>
            <div className="py-7"></div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Default;