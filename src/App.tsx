import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";
import Adote from './components/Adote'
import Contato from './components/Contato'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div className="bg-color-beige overflow-hidden">
        <Navbar />
        <Inicio />
        <Sobre />
        <Servicos />
        <Adote />
        <Contato />
        <Footer />
      </div>
    </>
  );
};

export default App;
