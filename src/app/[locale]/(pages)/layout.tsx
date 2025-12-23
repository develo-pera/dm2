import Navigation from "../components/common/navigation";
import Footer from "../components/common/footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;