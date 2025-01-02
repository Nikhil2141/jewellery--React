import Slider from "react-slick";

function SimpleSlider() {
  const CustomNextArrow = ({ onClick }) => {
    return (
      <div className="custom-arrow next-arrow mainslide-next" onClick={onClick}>
        <img src="src/images/arrowright.png" alt="Next" />
      </div>
    );
  };

  const CustomPrevArrow = ({ onClick }) => {
    return (
      <div className="custom-arrow prev-arrow mainslide-prev" onClick={onClick}>
        <img src="src/images/arrowleft.png" alt="Previous" />
      </div>
    );
  };
  const settings = {
    dots: false,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="bgimg">
        <div className="slide bg-[url('src/images/image-1.png')]">
          <div className="slide-text">
            <h2 className="heading-large">Jewellery</h2>
            <h1 className="heading-xlarge">Rings</h1>
            <h3 className="heading-medium">COLLECTION</h3>
            <a className="shop-button">Shop Now</a>
          </div>
        </div>

        <div className="slide bg-[url('src/images/image-2.png')]">
          <div className="slide-text">
            <h2 className="heading-large">Jewellery</h2>
            <h1 className="heading-xlarge">EARRING</h1>
            <h3 className="heading-medium">COLLECTION</h3>
            <a className="shop-button">Shop Now</a>
          </div>
        </div>

        <div className="slide bg-[url('src/images/image-3.png')]">
          <div className="slide-text">
            <h2 className="heading-large">Jewellery</h2>
            <h1 className="heading-xlarge">Necklace</h1>
            <h3 className="heading-medium">COLLECTION</h3>
            <a className="shop-button">Shop Now</a>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
