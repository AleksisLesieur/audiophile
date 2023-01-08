import styles from "./Navbar.module.css";
import { ReactComponent as Cart } from "../../icons/Cart.svg";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <div className={styles.flex}>
            <div
              className={styles.burgerMenu}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              |||
            </div>
            <h2 className={styles.title}>audiophile</h2>
            <Cart className={styles.cartForMobile} />
          </div>
          <ul
            className={styles.listItems}
            style={{
              left: isMenuOpen ? "0" : "-100%",
              opacity: isMenuOpen ? "1" : "0",
            }}
          >
            <li>home</li>
            <li>headphones</li>
            <li>speakers</li>
            <li>earphones</li>
          </ul>
          <div>
            <Cart className={styles.cartForDesktop} />
          </div>
        </div>
        <hr></hr>
      </div>
    </nav>
  );
}
