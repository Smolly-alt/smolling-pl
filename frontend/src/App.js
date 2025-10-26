// Import du css
import './App.css';
// Import des pages
import Accueil from './pages/Accueil';
// Import des composants
import Curseur from './composants/Curseur';
// Creation de l'app
function App() {
    return (
        <div className='App'>
            <Curseur/>
            <Accueil/>
        </div>
    );
}
// Export de l'app
export default App;