import styles from "./Products.module.scss";
import { useMediaQuery } from "react-responsive";

function ProductCard({ product }) {
  const isDesktop = useMediaQuery({ minWidth: 1160 });
  // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1159.9 })
  const isTablet = useMediaQuery({ minWidth: 560, maxWidth: 1159.9 });
  const isMobile = useMediaQuery({ maxWidth: 559.9 });
  console.log(product.includes);
  return (
    <div key={product.id} className={`container`}>
      <div className={styles.GoBack}>Go Back</div>
      <div className={styles["top-section"]}>
        <div className={styles.pictures}>
          <img
            src={`${product.image.desktop}`}
            alt=""
            width={540}
            height={560}
            style={{ display: isDesktop ? "block" : "none" }}
          />
          <img
            src={`${product.image.tablet}`}
            alt=""
            width={281}
            height={480}
            style={{ display: isTablet ? "block" : "none" }}
          />
          <img
            src={`${product.image.mobile}`}
            alt=""
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
          <div className={styles.price}>{product.price}</div>
          <div>
            <div>this is our useState thing</div>
            <button className={styles["btn-add-item"]}>add to cart</button>
          </div>
        </div>
      </div>
      <div className={styles["bottom-section"]}>
        <div className={styles["product-details"]}>
          <div className={styles["features-title"]}>features</div>
          <div className={styles["features-description"]}>
            {product.features}
          </div>
        </div>
        <div className={styles["items-quantities"]}>
          <div className={styles.inTheBox}>in the box</div>
          <div className={styles.contains}>
            <span className={styles.quantity}>
              {product.includes.map(function (element) {
                return (
                  <div>
                    <span>{element.quantity}x</span>
                    <span>{element.item}</span>
                  </div>
                );
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
