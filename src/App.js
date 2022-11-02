import HomePage from "./components/Page/Home/HomePage";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart/Cart";
import SliderImg from "./components/Slider/SliderImg";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <SliderImg></SliderImg>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
