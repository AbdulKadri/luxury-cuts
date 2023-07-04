interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <div className="font-poppins">{children}</div>;
};

export default Layout;
