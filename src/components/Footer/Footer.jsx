import styles from "./Footer.module.scss";
import { ReactComponent as Facebook } from "../../icons/Facebook.svg";
import { ReactComponent as Twitter } from "../../icons/Twitter.svg";
import { ReactComponent as Instagram } from "../../icons/Instagram.svg";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className={`${styles.flex}`}>
          <h2>audiophile</h2>

          <ul className={styles.navItems}>
            <Link className={styles['nav-items-links']} to = '/' >home</Link>
            <Link className={styles['nav-items-links']} to = '/headphones'>headphones</Link>
            <Link className={styles['nav-items-links']} to = '/speakers'>speakers</Link>
            <Link className={styles['nav-items-links']} to = '/earphones'>earphones</Link>
          </ul>
        </div>
        <div className={`${styles.flex} ${styles.socialMediaIcons}`}>
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
            Copyright 2023. All Rights Reserved
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
