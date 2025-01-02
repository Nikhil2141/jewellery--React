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

function Home() {
  return (
    <>
      <Header />
      <SimpleSlider />
      <Features />
      <Neckless_Selction />
      <Selection />
      <Earring_Selection />
      <Product_Selection />
      <Buypage />
      <Ring_Selection />
      <Feedback />
      <Contactpage />
    </>
  );
}

export default Home;
