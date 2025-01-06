import { useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import products from "../utlis/data";
import { useNavigate } from "react-router";

Buypage.propTypes = {
  CartItems: PropTypes.array, // Validate CartItem as an array
  setCartItems: PropTypes.func, // Validate setItem as a function
};

export default function Buypage({
  CartItems,
setCartItems
}) {
  const navigate = useNavigate();
  const [quantity, setquantity] = useState(1);


  const handleAddToCart = (id, image, name, price) => {
   const existingItem = CartItems.find((product) => product.id === id);

    if (existingItem) {
      existingItem.quantity += quantity; 
      setCartItems([...CartItems]); 
  
    } else {
      const obj = {id, image, name, price }; // New item added
      setCartItems([...CartItems, obj]);
      
      navigate("/cart");
    }
  };

  const handleplus = () => setquantity(quantity + 1);
  const handleminus = () => quantity > 1 && setquantity(quantity - 1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container Buy-page page-neck">
      <div className="heading">Product Of the Month</div>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="maincontainer">
            <div>
              <img
                className="imgbox"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="textbox">
              <p className="text7-1">{product.name}</p>
              <p className="text7-2">RS. {product.price}</p>
              <p className="text7-3">
                Whimsical jewellery that will look extra adorable when you wear
                it. This design is so cute and easy to wear, you will never want
                to take it off. Lightweight and super easy to carry that will
                amp up the style quotient outfit. And a perfect gift for your
                loved one.
              </p>
              <div className="quantity-box">
                <p className="text7-4">Quantity</p>
                <div className="plusbox">
                  <p className="decrease" onClick={handleminus}>
                    <img src="src/images/minus.png" alt="Decrease" />
                  </p>
                  <p className="quantity">{quantity}</p>
                  <p className="increase" onClick={handleplus}>
                    <img src="src/images/plus.png" alt="Increase" />
                  </p>
                </div>
                <div className="btn">
                  <a
                 
                    className="add"
                    onClick={() =>
                      handleAddToCart(
                        product.image,
                        product.name,
                        product.id,
                        product.price
                      )
                    }
                  >
                    Add to cart
                  </a>
                  <a className="buy">Buy it now</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
