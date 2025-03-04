// App.jsx
import Hero from "./components/Hero2";
import Services from "./components/Services";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import "./styles.css"; // Archivo global de estilos

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Services />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
