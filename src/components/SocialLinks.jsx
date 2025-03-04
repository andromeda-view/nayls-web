/* ==========================
   SocialLinks.jsx
   ========================== */
   import React from "react";
   import "../styles.css";
   
   const SocialLinks = () => {
     return (
       <div className="social-links text-center">
         <p>Síguenos en nuestras redes sociales:</p>
         <a href="https://www.instagram.com/nayls.04" target="_blank" rel="noopener noreferrer">
           <img src="https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white" alt="Instagram" />
         </a>
         <a href="#">
           <img src="https://img.shields.io/badge/Facebook-%231877F2.svg?style=for-the-badge&logo=Facebook&logoColor=white" alt="Facebook" />
         </a>
         <a href="#">
           <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp" />
         </a>
       </div>
     );
   };
   
   export default SocialLinks;