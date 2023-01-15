import styles from "./Navbar.module.scss";
import { ReactComponent as Cart } from "../../icons/Cart.svg";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  console.log(isMenuOpen);

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
              <span
                style={{
                  transform: isMenuOpen ? "rotate(45deg)" : "rotate(0deg)",
                  top: isMenuOpen ? "0px" : "0",
                  left: isMenuOpen ? "2px" : "0",
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
                  top: isMenuOpen ? "21.5px" : "24px",
                  left: isMenuOpen ? "2px" : "0",
                }}
              ></span>
            </div>
            <h2 className={styles.title}>audiophile</h2>
            <div style={{ width: "30px" }}></div>
          </div>

          <ul
            className={styles["nav-items"]}
            style={{
              left: isMenuOpen ? "0" : "-105%",
              opacity: isMenuOpen ? "1" : "0",
            }}
          >
            <li>home</li>
            <li>headphones</li>
            <li>speakers</li>
            <li>earphones</li>
          </ul>

          <Cart className={styles.cartForDesktop} />
        </div>
        <hr></hr>
      </div>
    </nav>
  );
}
