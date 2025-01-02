function Header() {
  return (
    <>
      <div className="container">
        <div className="header  ">
          <div>
            <img src="src/images/Logo.png" alt="logo"></img>
          </div>
          <div className="navmenu ">
            <ul className="nav-list">
              <li>
                <a>
                  Shop by Collections{" "}
                  <img
                    className="arrow"
                    src="src/images/nav-arrow.png"
                    alt="Arrow"
                  />
                </a>
              </li>
              <li>
                <a>
                  Shop by Category{" "}
                  <img
                    className="arrow"
                    src="src\images\nav-arrow.png"
                    alt="Arrow"
                  />
                </a>
              </li>
              <li>
                <a>Bestsellers</a>
              </li>
              <li>
                <a> Men's Jewellery</a>
              </li>
              <li>
                <a>Store Locations</a>
              </li>
            </ul>
          </div>

          <div className="cart-icons">
            <img src="src/images/search.png" alt="Search" />
            <img src="src/images/contact.png" alt="Wishlist" />
            <a href="/cart">
              {" "}
              <img src="src/images/cart.png" alt="Cart" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
