import Activity from "./components/Activity";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Navbar from "./components/Navbar";
import Photo from "./components/Photo";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Feature />
        <Activity />
        <Photo />
        <Location />
      </main>
      <Footer />
    </>
  );
}
