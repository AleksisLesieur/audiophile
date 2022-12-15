import styles from "./Navbar.module.css";
import { ReactComponent as Cart } from "../../icons/Cart.svg";

export default function Navbar() {
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <div className={styles.flex}>
            <div className={styles.burgerMenu}>|||</div>
            <h2 className={styles.title}>audiophile</h2>
            <Cart className={styles.cartForMobile} />
          </div>
          <div className={styles.listItems}>
            <div>home</div>
            <div>headphones</div>
            <div>speakers</div>
            <div>earphones</div>
          </div>
          <div>
            <Cart className={styles.cartForDesktop} />
          </div>
        </div>
        <hr></hr>
      </div>
    </nav>
  );
}
