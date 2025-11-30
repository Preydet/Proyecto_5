import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokemon from "./Home/Pokemon";
import PokemonDetail from "./Home/PokemonDetail";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokemon />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;