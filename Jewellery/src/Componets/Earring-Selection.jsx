import Slider from "react-slick";

function Earring_Selection() {
  const CustomNextArrow = ({ onClick }) => {
    return (
      <div className="custom-arrow next-arrow" onClick={onClick}>
        <img src="src/images/right arrow.png" alt="Next" />
      </div>
    );
  };

  const CustomPrevArrow = ({ onClick }) => {
    return (
      <div className="custom-arrow prev-arrow" onClick={onClick}>
        <img src="src/images/left arrow.png" alt="Previous" />
      </div>
    );
  };
  const settings = {
    dots: true,
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <>
      <div className="container">
        <div className="category-section">
          <h2 className="category-title">Earrings</h2>

          <div className="product-box ">
            <div className="product-grid">
              <Slider {...settings}>
                {/* <!-- Product Card 1 --> */}
                <div className="product-card">
                  <img src="src/images/ear-1.png" alt="Hobo Small" />
                  <p className="product-name">Hobo Small</p>
                  <p className="product-price">RS. 3499.00</p>
                </div>

                {/* <!-- Product Card 2 --> */}
                <div className="product-card">
                  <div className="image-container">
                    <img src="src/images/ear-2.png" alt="Storml" />
                    <p className="sale">Sale</p>
                  </div>
                  <p className="product-name">Storml</p>
                  <p className="product-price">
                    <span className="sale-price">RS.3,999.00</span>
                    <span>RS. 3499.00</span>
                  </p>
                </div>

                {/* <!-- Product Card 3 --> */}
                <div className="product-card">
                  <img src="src/images/ear-3.png" alt="Bo Soft Strap" />
                  <p className="product-name">Bo Soft Strap</p>
                  <p className="product-price">RS. 3999.00</p>
                </div>

                {/* <!-- Product Card 4 --> */}
                <div className="product-card">
                  <img src="src/images/ear-4.png" alt="Hobo Large" />
                  <p className="product-name">Hobo Large</p>
                  <p className="product-price">RS. 3499.00</p>
                </div>

                {/* <!-- Product Card 5 --> */}

                <div className="product-card">
                  <img src="src/images/ear-1.png" alt="Hobo Small" />
                  <p className="product-name">Hobo Small</p>
                  <p className="product-price">RS. 3499.00</p>
                  <div className="dot">
                    <span className="dot1">
                      <span className="dot1-1"></span>
                    </span>
                    <span className="dot2"></span>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <div className="fifth-page">
        {/* <div className="container"> */}
        <div className="text-section">
          <div className="main-text">THE NEW</div>
          <div className="sub-text">The unique make that fits your style</div>
          <div className="description-text">
            Always look for in a world-class diamond!
          </div>
          <div>
            <a className="Explore-button">Explore Now</a>
          </div>
        </div>

        <div className="img5">
          <img src="src/images/5img.png" alt="Fifth Page Image"></img>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Earring_Selection;
