import Layout from "./Layout";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import haircutImage from "./assets/testing.jpg";
import haircutImage2 from "./assets/Haircut.png";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  return (
    <Layout>
      <Header />
      <Hero />
      <Services />
      <Products />
      <div className="hidden md:flex h-[50vh] w-full">
        <img src={haircutImage} alt="" className="w-1/2" />
        <img src={haircutImage2} alt="" className="w-1/2" />
      </div>
      <Reviews />
      <Footer />
    </Layout>
  );
}

export default App;
