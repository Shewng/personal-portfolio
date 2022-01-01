import Footer from "./Footer";
import Navbar from "./Navbar";
import Synopsis from "./Synopsis";

const Layout = ({ children }) => {
  return (
    <div className="master-container">
      <div className="row-container">
        <div className="navbar-container">
          <Navbar />
          <hr />
          <Synopsis />
        </div>
        <div className="content-container">{children}</div>
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
