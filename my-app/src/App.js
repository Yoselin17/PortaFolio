import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './vista/home';

function App() {
  return (
    <><BrowserRouter>
      <Routes>
        <Route exact path="/" element={<home />} />
        <Route exact path="/navbar" element={<navbar />} />
      </Routes>
    </BrowserRouter></>
  );
}

export default App;
