function Product_Selection() {
  return (
    <>
      <div className="container">
        <div className="category-section">
          <div className="neckbox">
            <div className="maintxt">The Perfect Pairing</div>
            <div className="secondtxt">
              {" "}
              Pair up our statement pieces to create a unique look
            </div>
          </div>

          <div className="images">
            <div className="img1">
              <img src="src/images/6-1.png"></img>
              <div className="necktxt">
                <span className="ab">
                  Necklaces
                  <img src="src/images/6-arrow.png" className="Vector"></img>
                </span>
              </div>
            </div>

            <div className="img2">
              <div className="img2-1">
                <img src="src/images/6-2.png"></img>
                <div className="ringtxt">
                  {" "}
                  <span>
                    Rings
                    <img src="src/images/6-arrow.png" className="Vector"></img>
                  </span>
                </div>
              </div>
              <div className="img2-2">
                <img src="src/images/6-3.png"></img>
                <div className="bracelet">
                  <span>
                    Bracelets
                    <img src="src/images/6-arrow.png" className="Vector"></img>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src="src/images/6-4.png" className="p7"></img>
      </div>
    </>
  );
}

export default Product_Selection;
