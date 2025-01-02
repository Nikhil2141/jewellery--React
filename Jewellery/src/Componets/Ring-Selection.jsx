import Slider from "react-slick";

function Ring_Selection() {
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
          <div className="product-box ">
            <div className="product-grid page-neck">
              <Slider {...settings}>
                <div className="product-card">
                  <img src="src/images/img1.png" alt="Hobo Small" />
                  <p className="product-name">Hobo Small</p>
                  <p className="product-price">RS. 3499.00</p>
                </div>

                <div className="product-card">
                  <div className="image-container">
                    <img src="src/images/img2.png" alt="Storml" />
                    <p className="sale">Sale</p>
                  </div>
                  <p className="product-name">Storml</p>
                  <p className="product-price">
                    {" "}
                    <span>RS.3,999.00 </span> <span>RS. 3499.00</span>
                  </p>
                </div>
                <div className="product-card">
                  <img src="src/images/3-img.png" alt="Bo Soft Strap" />
                  <p className="product-name">Bo Soft Strap</p>
                  <p className="product-price">RS. 3999.00</p>
                </div>
                <div className="product-card">
                  <img src="src/images/img4.png" alt="Hobo Large" />
                  <p className="product-name">Hobo Large</p>
                  <p className="product-price">RS. 3499.00</p>
                </div>
                <div className="product-card">
                  <img src="src/images/img1.png" alt="Hobo Small" />
                  <p className="product-name">Hobo Small</p>
                  <p className="product-price">RS. 3499.00</p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ring_Selection;
