import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Synopsis from "./Synopsis";
import styles from "../styles/components/Layout.module.scss";

const Layout = ({ children }) => {
  const router = useRouter(); //get the current route/path from /pages

  return (
    <div className={styles["master-container"]}>
      <div className={styles["row-container"]}>
        <div className={styles["navbar-container"]}>
          <Navbar />
          {/**only display synopsis if we are on home*/}
          {router.asPath === "/" ? (
            <>
              <hr className={styles["synopsis-line"]} /> <Synopsis />
            </>
          ) : (
            ""
          )}
        </div>
        <div className={styles["content-container"]}>{children}</div>
      </div>

      <div className={styles["footer-container"]}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
