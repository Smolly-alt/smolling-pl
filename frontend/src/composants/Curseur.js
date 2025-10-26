// Import des hooks
import { useEffect, useState } from "react";
// Import des icones
import classique from "../images/bear.png";
import lien from "../images/bear-wave.png";
// Import du css
import "../css/Curseur.css";
// Creation du composant Curseur
function Curseur() {
// Creation des states
/* 
Position de la souris par défaut
*/
  const [position, setPosition] = useState({ x: 0, y: 0 });
/*
Booleen pour definir si le curseur est sur un lien ou pas
*/
  const [hoverLink, setHoverLink] = useState(false);
// Les effects pour gerer les events de la souris
  useEffect(() => {
    const deplacementCurseur = (e) => {
// Maj du state de la souris
      setPosition({ x: e.clientX, y: e.clientY });
    };
// Fonction pour dectetion de survol de lien
    const surLinkCurseur = (e) => {
      if (e.target.tagName === "A") setHoverLink(true);
    };
    const pasSurLinkCurseur = (e) => {
      if (e.target.tagName === "A") setHoverLink(false);
    };
// Ecouteurs d'event
    document.addEventListener("mousemove", deplacementCurseur);
    document.addEventListener("mouseover", surLinkCurseur);
    document.addEventListener("mouseout", pasSurLinkCurseur);
// Cleanup des ecouteurs d'event
    return () => {
      document.removeEventListener("mousemove", deplacementCurseur);
      document.removeEventListener("mouseover", surLinkCurseur);
      document.removeEventListener("mouseout", pasSurLinkCurseur);
    };
  }, []);
// Rendu JSX
  return (
<img
  src={hoverLink ? lien : classique}
  alt="curseur ourson"
  className="curseur-ourson"
  style={{
    left: `${position.x}px`,
    top: `${position.y}px`,
  }}
/>
  );
}
// Export du composant Curseur
export default Curseur;