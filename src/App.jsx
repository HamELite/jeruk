import React from "react";
import Hero from "./Component/Hero/Hero";
import Services from "./Component/Service/Services.jsx";
import WhereToBuy from "./Component/Wherethebuy/WhereToBuy.jsx";
import AppBanner from "./Component/AppBanner/AppBanner.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      easing: "ease-in-cubic",
    });
  }, []);
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Services />
      <WhereToBuy />
      <AppBanner />
      <Footer />
    </main>
  );
};

export default App;