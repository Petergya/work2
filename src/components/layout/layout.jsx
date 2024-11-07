import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="w-full h-full flex flex-row-rever bg-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
