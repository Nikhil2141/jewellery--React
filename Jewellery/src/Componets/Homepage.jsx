import PropTypes from "prop-types";
import Buypage from "./Buy-page";
import Contactpage from "./Contactpage";
import Earring_Selection from "./Earring-Selection";
import Features from "./Features";
import Feedback from "./Feedback";
import Header from "./Header";
import Neckless_Selction from "./Neck-Selection";
import Product_Selection from "./Product-Selection";
import Ring_Selection from "./Ring-Selection";
import Selection from "./Selection";
import SimpleSlider from "./Simpleslider";

Home.propTypes = {
  CartItems: PropTypes.any, // Validate CartItem as an array
  setCartItems: PropTypes.any, // Validate setItem as a function
};

function Home({CartItems,setCartItems}) {
  return (
    <>
      <Header />
      <SimpleSlider />
      <Features />
      <Neckless_Selction />
      <Selection />
      <Earring_Selection />
      <Product_Selection />
      <Buypage  CartItems={CartItems} setCartItems={setCartItems}/>
      <Ring_Selection />
      <Feedback />
      <Contactpage />
    </>
  );
}

export default Home;
