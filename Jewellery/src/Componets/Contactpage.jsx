function Contactpage() {
  return (
    <>
      <div className="lastpage">
        <div className="contactpage">
          <div className="aboutus">
            <p className="t1">ABOUT US</p>
            <p className="t2">
              Silversea is one-stop solution for all your dainty silver
              jewellery needs.Our mission is to provide trendy and everyday wear
              minimal silverjewellery from all over the globe to our customers
              at pocket friendlyprices. Forher carefully curates its designs
              from all over the world togive its customers a feeling of newness.
              The brand was established in 2017 and is caving its path to
              success since then.
            </p>
            <div className="icon">
              <img src="src/images/facebook.png" className="fblogo" />
              <img src="src/images/insta.png" className="instalogo" />
            </div>
          </div>

          <div className="block2">
            <div className="quick-links">
              <ul>
                <li className="headtxt capitaltxt">Quick links</li>
                <li>Terms & Conditions</li>
                <li>Contact us</li>
                <li>Shipping & Delivery</li>
                <li>Return Policy</li>
                <li>About Us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="collection">
              <ul>
                <li className="collectionhead capitaltxt">Collections</li>
                <li>All</li>
                <li>Rings</li>
                <li>Chains</li>
                <li>Bracelets</li>
                <li>Necklaces</li>
                <li>Earrings</li>
              </ul>
            </div>
            <div className="newsletter">
              <p className="txt1">Newsletter</p>
              <p className="txt2">
                Subscribe to receive updates, access to exclusive deals, and
                more.
              </p>
              <input placeholder="Enter your email address" className="input" />
              <button className="subscribe">Subscribe</button>
            </div>
          </div>
        </div>
        <div>
          <div className="lasttxt">Copyright © 2024 Silversea</div>
        </div>
      </div>
    </>
  );
}

export default Contactpage;
