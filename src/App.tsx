import Layout from "./Layout";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";

function App() {
  return (
    <Layout>
      <Header />
      <Hero />
      <Services />
      <Products />
    </Layout>
  );
}

export default App;
