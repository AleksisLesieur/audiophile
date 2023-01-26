import styles from "./NavRouting.module.scss";
import { BrowserRouter } from "react-router-dom";
import { browserHistory, Router, Route, Routes } from "react-router";
import { useParams } from "react-router";
import { useLocation } from "react-router";
import { useMediaQuery } from "react-responsive";

function Card({ product }) {
  const isDesktop = useMediaQuery({ minWidth: 1160 });
  // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1159.9 })
  const isTablet = useMediaQuery({ minWidth: 560, maxWidth: 1159.9 });
  const isMobile = useMediaQuery({ maxWidth: 559.9 });
  // console.log(product.categoryImage);
  return (
    <div
      key={product.id}
      className={`container ${styles["nav-items-styling"]} ${styles.alignement}`}
    >
      <div className={styles.pictures}>
        {/* <img src={`${product.image.desktop}`} alt="" width={540} height={560} /> */}

        <img
          src={`${product.categoryImage.desktop}`}
          alt=""
          width={540}
          height={560}
          style={{ display: isDesktop ? "block" : "none" }}
        />
        <img
          src={`${product.categoryImage.tablet}`}
          alt=""
          width={689}
          height={352}
          style={{ display: isTablet ? "block" : "none" }}
        />
        <img
          src={`${product.categoryImage.mobile}`}
          alt=""
          width={327}
          height={352}
          style={{ display: isMobile ? "block" : "none" }}
        />
      </div>
      <article>
        <div
          className={styles.newProduct}
          style={{ display: product.new ? "block" : "none" }}
        >
          New Product
        </div>

        <div className={styles.productTitle}>{product.name}</div>
        <div className={styles.description}>{product.description}</div>
        <button>SEE PRODUCT</button>
      </article>
    </div>
  );
}

export default Card;
