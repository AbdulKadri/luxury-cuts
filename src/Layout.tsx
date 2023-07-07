import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./utils/ScrollToTop";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="font-poppins">
      <ScrollToTop />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
