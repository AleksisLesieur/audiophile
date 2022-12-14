import "./Navbar.css";
import { ReactComponent as Cart } from "../../icons/Cart.svg";

export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <div>
            <h2>audiophile</h2>
          </div>
          <div className="listItems">
            <div>home</div>
            <div>headphones</div>
            <div>speakers</div>
            <div>earphones</div>
          </div>
          <div>
            <Cart />
          </div>
        </div>
        <hr></hr>
      </div>
    </nav>
  );
}
