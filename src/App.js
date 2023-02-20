import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar.jsx";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer.jsx";

const App = () => {
  return (
    
   <div>
      <NavBar />
      <ItemListContainer titulo="Bienvenido a Men, tu tienda favorita." subtitulo="Creando tendencia."/>
    </div>
  );
}

export default App;