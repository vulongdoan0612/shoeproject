import HomePage from "./components/Page/Home/HomePage";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart/Cart";
import CardDetail from "./components/Page/CardDetail/CardDetail";
import { useState } from "react";
import CheckOut from "./components/Page/CheckOut/CheckOut";
import Footer from "./components/Footer/Footer";

function App() {
  const [price, setPrice] = useState(false);

  const [changeImg, setChangeImg] = useState(false);

  const [changeImgBlack, setChangeImgBlack] = useState(false);
  const [changeImgBlue, setChangeImgBlue] = useState(false);

  const [changeImgYellow, setChangeImgYellow] = useState(false);

  const [changeImgGreen, setChangeImgGreen] = useState(false);

  const [changeImgBrown, setChangeImgBrown] = useState(false);
  const [changeImgGrey, setChangeImgGrey] = useState(false);

  const [sizeL, setSizeL] = useState(10);
  const [sizeR, setSizeR] = useState(10);
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route
          path="/cart"
          element={
            <Cart
              setPrice={setPrice}
              price={price}
              // changeImgBlack={changeImgBlack}
              // changeImgBlue={changeImgBlue}
              // changeImgYellow={changeImgYellow}
              // changeImgBrown={changeImgBrown}
              // changeImgGreen={changeImgGreen}
              // changeImgGrey={changeImgGrey}
              // changeImg={changeImg}
              // sizeL={sizeL}
              // sizeR={sizeR}
            ></Cart>
          }
        ></Route>
        <Route
          path="/card-detail/:id"
          element={
            <CardDetail
              sizeR={sizeR}
              sizeL={sizeL}
              setSizeR={setSizeR}
              setSizeL={setSizeL}
              setChangeImgGrey={setChangeImgGrey}
              setChangeImgBrown={setChangeImgBrown}
              setChangeImgGreen={setChangeImgGreen}
              setChangeImgYellow={setChangeImgYellow}
              setChangeImgBlue={setChangeImgBlue}
              setChangeImg={setChangeImg}
              setChangeImgBlack={setChangeImgBlack}
              changeImgBlack={changeImgBlack}
              changeImgBlue={changeImgBlue}
              changeImgYellow={changeImgYellow}
              changeImgBrown={changeImgBrown}
              changeImgGreen={changeImgGreen}
              changeImgGrey={changeImgGrey}
              changeImg={changeImg}
              setPrice={setPrice}
              price={price}
            ></CardDetail>
          }
        ></Route>
        <Route path="/shop/checkout" element={<CheckOut></CheckOut>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
