import { Outlet } from "react-router-dom";
import NavBAr from "../components/navBar/NavBAr";
import FooterComponent from "../components/footer/FooterComponent";

const Layout = () => {
  return (
    <>
      <NavBAr />
      <main style={{ margin: "3.1rem 0 2.5rem 0" }}>
        <div className="con">
          <Outlet />
        </div>
      </main>
      <FooterComponent />
    </>
  );
};

export default Layout;
