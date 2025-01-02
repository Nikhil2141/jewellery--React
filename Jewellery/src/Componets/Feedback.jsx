import Slider from "react-slick";

export default function Feedback() {
  const CustomNextArrow = ({ onClick }) => {
    return (
      <div className="custom-arrow next-arrow feedback-next" onClick={onClick}>
        <img src="src/images/right arrow.png" alt="Next" />
      </div>
    );
  };

  const CustomPrevArrow = ({ onClick }) => {
    return (
      <div className="custom-arrow prev-arrow feedback-prev" onClick={onClick}>
        <img src="src/images/left arrow.png" alt="Previous" />
      </div>
    );
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <>
      <div className="feedback">
        <div className="container">
          <div className="feedheading">Testimonials</div>
          <Slider {...settings}>
            <div className="review">
              <div className="rating">
                <img src="src/images/grade.png" />
                <img src="src/images/grade.png" />
                <img src="src/images/grade.png" />
                <img src="src/images/grade.png" />
                <img src="src/images/grade (1).png" />
              </div>
              <p className="feedtxt">
                Making customer believe what they are investing on is the
                biggest concern nowadays , and we purchase pretty often from
                Forher store, cause they make sure that their customers gets the
                best of it , I recommend everyone out there to check their
                collection once , we did like that and I am pretty much sure you
                guys would like that too , ForHer awaiting for much such
                collections
              </p>
              <p className="review-name"> Jitesh Gulgulia</p>
            </div>
            <div className="review">
              <div className="rating">
                <img src="src/images/grade.png" />
                <img src="src/images/grade.png" />
                <img src="src/images/grade.png" />
                <img src="src/images/grade.png" />
                <img src="src/images/grade (1).png" />
              </div>
              <p className="feedtxt">
                Making customer believe what they are investing on is the
                biggest concern nowadays , and we purchase pretty often from
                Forher store, cause they make sure that their customers gets the
                best of it , I recommend everyone out there to check their
                collection once , we did like that and I am pretty much sure you
                guys would like that too , ForHer awaiting for much such
                collections
              </p>
              <p className="review-name"> Jitesh Gulgulia</p>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
