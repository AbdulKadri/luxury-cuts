import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./utils/ScrollToTop";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="font-poppins flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
