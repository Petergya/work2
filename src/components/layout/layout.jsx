import Navbar from "./Navbar";
import Footer from "./Footer";

export default function HeaderFooter({ children }) {

  return (
    <div className="w-full h-full flex flex-row-rever">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
};

