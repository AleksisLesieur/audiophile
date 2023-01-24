import styles from "./Navbar.module.scss";
import { ReactComponent as Cart } from "../../icons/Cart.svg";
import { ReactComponent as MainLogo } from "../../icons/MainLogo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../../index.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.navbar}>
          <div
            className={styles["menu-btn"]}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            // style={{
            //   transform: isMenuOpen ? "translateX(0px)" : "translateX(-50px)",
            // }}
          >
            <div className={styles["nav-icon"]}>
              {/* animating the burger menu */}
              <span
                style={{
                  transform: isMenuOpen ? "rotate(45deg)" : "rotate(0deg)",
                  top: isMenuOpen ? "-1.4px" : "0",
                  width: isMenuOpen ? '37px' : '30px',
                  left: isMenuOpen ? "0.7px" : "0",
                }}
              ></span>
              <span
                style={{
                  width: isMenuOpen ? "0%" : "30px",
                  opacity: isMenuOpen ? "0" : "1",
                }}
              ></span>
              <span
                style={{
                  transform: isMenuOpen ? "rotate(-45deg)" : "rotate(0deg)",
                  top: isMenuOpen ? "14.8px" : "13px",
                  width: isMenuOpen ? '37px' : '30px',
                  left: isMenuOpen ? "0.7px" : "0",
                }}
              ></span>
            </div>
            {/* animation ends here */}
            <MainLogo className={styles.logoSVG}/>
            {/* this is to simply fix the li items spacing */}
            {/* <div style={{ width: "90px", height: '25px' }}></div> */}
            <div className={styles['audiophile-fix']}></div>
          </div>
   
          <ul
          onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles["nav-items"]}
            style={{
              left: isMenuOpen ? "0" : "-105%",
              opacity: isMenuOpen ? "1" : "0",
            }}
          >
            {/* <li>home</li>
            <li>headphones</li>
            <li>speakers</li>
            <li>earphones</li> */}
            <Link className={styles['nav-items-links']} to = '/' >home</Link>
            <Link className={styles['nav-items-links']} to = '/headphones'>headphones</Link>
            <Link className={styles['nav-items-links']} to = '/speakers'>speakers</Link>
            <Link className={styles['nav-items-links']} to = '/earphones'>earphones</Link>
          </ul>

          <Cart className={styles.cart} />
        </div>
        <hr></hr>
      </div>
    </nav>
  );
}
