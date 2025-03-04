/* ==========================
   App.jsx
   ========================== */
   import Hero2 from "./components/Hero2";
   import Services from "./components/Services";
   import SocialLinks from "./components/SocialLinks";
   import Footer from "./components/Footer";
   import "bootstrap/dist/css/bootstrap.min.css";
   import "./styles.css";
   
   function App() {
     return (
       <>
         <Hero2 />
         <Services />
         <SocialLinks />
         <Footer />
       </>
     );
   }
   
   export default App;