import { BrowserRouter as Router , Routes , Route , Link } from "react-router-dom";

import Container from "../src/components/layout/Conteiner";
import Footer from "./components/layout/Footer";
import About from "./components/layout/About"

function App() {

  return (
    <>
    <Router>         
      <Routes>
        <Route exact path='/' element={<Container />} />
        <Route path='/About' element={<About />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
