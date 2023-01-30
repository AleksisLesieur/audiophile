import styles from "./Products.module.scss";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { NumericFormat } from "react-number-format";
import { useState } from "react";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const [count, setCount] = useState(1);

  const isDesktop = useMediaQuery({ minWidth: 1160 });
  const isTablet = useMediaQuery({ minWidth: 680, maxWidth: 1159.9 });
  const isMobile = useMediaQuery({ maxWidth: 679.9 });

  return (
    <div key={product.id} className={`container`}>
      <div onClick={() => navigate(-1)} className={styles.GoBack}>
        Go Back
      </div>
      <article className={styles["top-section"]}>
        <div className={styles.pictures}>
          <img
            src={`${product.image.desktop}`}
            alt={``}
            width={540}
            height={560}
            style={{ display: isDesktop ? "block" : "none" }}
          />
          <img
            src={`${product.image.tablet}`}
            alt={``}
            width={281}
            height={480}
            style={{ display: isTablet ? "block" : "none" }}
          />
          <img
            src={`${product.image.mobile}`}
            alt={``}
            width={327}
            height={327}
            style={{ display: isMobile ? "block" : "none" }}
          />
        </div>
        <div className={styles["img-description"]}>
          <div
            className={styles.newProduct}
            style={{ display: product.new ? "block" : "none" }}
          >
            New Product
          </div>
          <div className={styles.productTitle}>{product.name}</div>
          <div className={styles.description}>{product.description}</div>
          {/* <div className={styles.price}>{product.price}</div> */}
          <div className={styles.price}>
            <NumericFormat
              value={product.price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$ "}
            />
          </div>
          <div className={styles["cart-menu"]}>
            <div className={styles["cart-btns"]}>
              <button
                disabled={count <= 1}
                onClick={() => setCount(count - 1)}
                className={styles["btn-count"]}
              >
                -
              </button>
              <span className={`${styles["btn-amount"]}`}>{count}</span>
              <button
                //  onClick={() => setIsMenuOpen(!isMenuOpen)}
                onClick={() => setCount(count + 1)}
                className={styles["btn-count"]}
              >
                +
              </button>
            </div>
            <button className={styles["btn-cart"]}>add to cart</button>
          </div>
        </div>
      </article>
      <div className={styles["bottom-section"]}>
        <div className={styles["product-details"]}>
          <div className={styles.titles}>features</div>
          <div className={styles["feature-description"]}>
            {`${product.features}`}
          </div>
        </div>
        <div className={styles["quantities"]}>
          <div className={styles.titles}>in the box</div>
          <div className={styles.contains}>
            {product.includes.map(function (element) {
              return (
                <div key={element.id} className={styles["item-quantities"]}>
                  <span className={styles["quantity-number"]}>
                    {element.quantity}x
                  </span>
                  <span className={styles["quantity-list"]}>
                    {element.item}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
