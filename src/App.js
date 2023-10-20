import "./scss/style.scss";

import FeaturesList from "./components/Features/FeaturesList";
import SwiperItem from "./components/Swiper/Swiper";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <SwiperItem />
      <FeaturesList />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
