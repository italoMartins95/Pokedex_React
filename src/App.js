import { BrowserRouter as Router , Routes , Route , Link } from "react-router-dom";

import Container from "../src/components/layout/Conteiner";
import Footer from "./components/layout/Footer";
import About from "./components/layout/About"

function App() {

  return (
    <>
      <Container />
      <Footer />
    </>
  );
}

export default App;
