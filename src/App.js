import HomePage from "./components/Page/Home/HomePage";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart/Cart";
import CardDetail from "./components/Page/CardDetail/CardDetail";
import { useState } from "react";

function App() {
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
              changeImgBlack={changeImgBlack}
              changeImgBlue={changeImgBlue}
              changeImgYellow={changeImgYellow}
              changeImgBrown={changeImgBrown}
              changeImgGreen={changeImgGreen}
              changeImgGrey={changeImgGrey}
              changeImg={changeImg}
              sizeL={sizeL}
              sizeR={sizeR}
            ></Cart>
          }
        ></Route>
        <Route
          path="/card-detail/:id"
          element={
            <CardDetail
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
            ></CardDetail>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
