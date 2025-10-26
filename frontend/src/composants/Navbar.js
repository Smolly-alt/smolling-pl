// Import du css
import { useEffect, useState } from "react";
import axios from "axios";
import "../css/Navbar.css";
// Import des images
import clear from "../images/meteo-clear.png";
import cloud from "../images/meteo-cloud.png";
import mist from "../images/meteo-mist.png";
import rain from "../images/meteo-rain.png";
import snow from "../images/meteo-snow.png";
import thunderstorm from "../images/meteo-thunderstorm.png";

// Creation du composant Navbar
function Navbar() {
    const [logo, setLogo] = useState(cloud);
    const petales = Array.from({ length: 50 });
    useEffect(() => {
        const fetchMeteo = async () => {
            try {
                const res = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=Lille,FR&appid=TA_CLE_API&units=metric`
                );
                const meteo = res.data.meteo[0].main;
                switch(meteo) {
                    case "Clear": setLogo(clear); break;
                    case "Clouds": setLogo(cloud); break;
                    case "Rain": setLogo(rain); break;
                    case "Drizzle":
                    case "Thunderstorm": setLogo(thunderstorm); break;
                    case "Snow": setLogo(snow); break;
                    case "Mist": setLogo(mist); break;
                    case "Smoke":
                    case "Haze":
                    case "Fog":
                    case "Dust": setLogo(rain); break;
                    case "Ash":
                    case "Squall":
                    case "Tornado": setLogo(thunderstorm); break;
                    default: setLogo(cloud);
                }
            } catch (err) {
                console.log("Erreur météo:", err);
            }
        };
        fetchMeteo();
    }, []);
  return (
    <nav>
      <div><img src={logo} alt="Logo fille météo" style={{ width: 60, height: 60}} /></div>
      <ul>
        <li>
          <a href="#page1">Page 1</a>
          <a href="#page2">Page 2</a>
          <a href="#page3">Page 3</a>
          <a href="#page4">Page 4</a>
        </li>
      </ul>
      {petales.map((_, i) => (
        <div
          key={i}
          className="petales"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${3 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 5}s`,
            width: `${5 + Math.random() * 5}px`,
            height: `${5 + Math.random() * 5}px`,
            backgroundColor: `hsl(${330 + Math.random() * 30}, 80%, 80%)`,
          }}
        ></div>
      ))}
    </nav>
  );
}
// Export du composant Navbar
export default Navbar;