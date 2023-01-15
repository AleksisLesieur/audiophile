import styles from "./Footer.module.scss";
import { ReactComponent as Facebook } from "../../icons/Facebook.svg";
import { ReactComponent as Twitter } from "../../icons/Twitter.svg";
import { ReactComponent as Instagram } from "../../icons/Instagram.svg";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className={`${styles.flex} ${styles.center}`}>
          <h2>audiophile</h2>

          <ul className={styles.navItems}>
            <li>home</li>
            <li>headphones</li>
            <li>speakers</li>
            <li>earphones</li>
          </ul>
        </div>
        <div className={`${styles.flex} ${styles.base}`}>
          <section>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we're open 7 days a week.
          </section>
          <div className={`${styles.icons} ${styles.shownOnDesktop}`}>
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.copyright}>
            Copyright 2021. All Rights Reserved
          </div>
          <div className={`${styles.icon} ${styles.shownOnMobile}`}>
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>
      </div>
    </footer>
  );
}
