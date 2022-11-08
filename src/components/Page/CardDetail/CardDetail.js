import React from "react";
import classNames from "classnames/bind";
import styles from "./CardDetail.module.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import addToCart, { addColor, addProduct } from "../../../redux/addToCart";
import "./CardDetail.css";
const cx = classNames.bind(styles);

export default function CardDetail(props) {
  const {
    setChangeImgBlack,
    changeImgBlack,
    setChangeImgGreen,
    changeImgGreen,
    setChangeImgGrey,
    changeImgGrey,
    setChangeImgBrown,
    changeImgBrown,
    setChangeImgYellow,
    changeImgYellow,
    setChangeImgBlue,
    changeImgBlue,
    setChangeImg,
    changeImg,
    setSizeL,
    setSizeR,
    sizeL,
    sizeR,
    price,
    setPrice,
    bag,
    foot,
    apron,
  } = props;
  const dispatch = useDispatch();
  const settings = {
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const productDetail = useSelector((state) => state.products.allProducts);
  const footProducts = useSelector((state) => state.products.footProducts);
  const apronProducts = useSelector((state) => state.products.apronProducts);

  const bagProducts = useSelector((state) => state.products.bagProducts);
  const [data, setData] = useState([]);
  //sử dụng useParams để lấy thông tin từ id card ra thay vì truyền props
  const { id } = useParams();
  const compare = () => {
    if (bag === true) {
      let compareData2 = bagProducts.filter((data) => {
        return data.id == id;
      });
      setData(compareData2);
    } else if (foot) {
      let compareData3 = footProducts.filter((data) => {
        return data.id == id;
      });
      setData(compareData3);
    } else if (apron) {
      let compareData4 = apronProducts.filter((data) => {
        return data.id == id;
      });
      setData(compareData4);
    } else {
      let compareData = productDetail.filter((data) => {
        return data.id == id;
      });
      setData(compareData);
    }
  };
  useEffect(() => {
    compare();
  }, [id]);
  const [selected, setSelected] = useState(false);

  const changeColorBlack = (data) => {
    console.log("b", changeImgBlack);
    setSelected(true);
    setChangeImgBlack(true);
    setChangeImgBrown(false);
    setChangeImgBlue(false);
    setChangeImgGreen(false);

    setChangeImgGrey(false);
    setChangeImgYellow(false);
    setChangeImg(false);
  };
  const changeColorBrown = (data) => {
    setSelected(true);

    console.log("br", changeImgBrown);
    setChangeImgBlack(false);
    setChangeImgBrown(true);
    setChangeImgBlue(false);
    setChangeImgGreen(false);

    setChangeImgGrey(false);
    setChangeImgYellow(false);
    setChangeImg(false);
  };
  const changeColorBlue = (data) => {
    setSelected(true);

    console.log("bl", changeImgBlue);
    setChangeImgBlack(false);
    setChangeImgBrown(false);
    setChangeImgBlue(true);
    setChangeImgGreen(false);

    setChangeImgGrey(false);
    setChangeImgYellow(false);
    setChangeImg(false);
  };
  const changeColorGreen = () => {
    setSelected(true);

    console.log("gr", changeImgGreen);
    setChangeImgBlack(false);
    setChangeImgBrown(false);
    setChangeImgBlue(false);
    setChangeImgGreen(true);

    setChangeImgGrey(false);
    setChangeImgYellow(false);
    setChangeImg(false);
  };

  const changeColorGrey = (data) => {
    setSelected(true);

    console.log("grey", changeImgGrey);
    setChangeImgBlack(false);
    setChangeImgBrown(false);
    setChangeImgBlue(false);
    setChangeImgGreen(false);

    setChangeImgGrey(true);
    setChangeImgYellow(false);
    setChangeImg(false);
  };
  const changeColorYellow = (data) => {
    setSelected(true);

    console.log("ye", changeImgYellow);
    setChangeImgBlack(false);
    setChangeImgBrown(false);
    setChangeImgBlue(false);
    setChangeImgGreen(false);

    setChangeImgGrey(false);
    setChangeImgYellow(true);
    setChangeImg(false);
  };
  const changeColorOrigin = (data) => {
    setSelected(true);

    console.log("o", changeImg);
    setChangeImgBlack(false);
    setChangeImgBrown(false);
    setChangeImgBlue(false);
    setChangeImgGreen(false);

    setChangeImgGrey(false);
    setChangeImgYellow(false);
    setChangeImg(true);
  };
  const handleAdd = (data) => {
    dispatch(addProduct(data));
  };

  const handleSizeL = (e) => {
    setSizeL(e.target.value);
  };
  const handleSizeR = (e) => {
    setSizeR(e.target.value);
  };
  const [sole2, setSole2] = useState(false);
  const [sole3, setSole3] = useState(false);
  const [sole, setSole] = useState(false);
  const handleActive = (data) => {
    if (sole2 === true || sole3 === true) {
      setSole2(false);
      setSole3(false);
      setPrice(false);

      setSole((sole) => !sole);
    } else {
      setPrice(false);

      setSole((sole) => !sole);
    }
  };

  const handleActive2 = (data) => {
    if (sole === true || sole3 === true) {
      setSole(false);
      setSole3(false);
      setPrice(true);

      setSole2((sole2) => !sole2);
    } else {
      setPrice(true);

      setSole2((sole2) => !sole2);
    }
  };
  const handleActive3 = (data) => {
    if (sole2 === true || sole === true) {
      setSole2(false);
      setSole(false);
      setSole3((sole3) => !sole3);
    } else {
      setPrice(true);

      setSole3((sole3) => !sole3);
    }
  };

  return (
    <div className={cx("wrapper")}>
      {data.map((data, idx) => {
        return (
          <div key={idx}>
            <div
              // key={idx}
              style={{ marginLeft: "3vw", marginRight: "3vw" }}
              className={cx("slider")}
            >
              {changeImg ? (
                <Slider {...settings}>
                  <div className={cx("sliderImg")}>
                    <img src={data.img} alt="" />
                  </div>
                  <div className={cx("sliderImg")}>
                    <img src={data.img2} alt="" />
                  </div>
                  <div className={cx("sliderImg")}>
                    <img src={data.img3} alt="" />
                  </div>
                </Slider>
              ) : changeImgGreen ? (
                <Slider {...settings}>
                  <div className={cx("sliderImg")}>
                    <img src={data.imgGreen} alt="" />
                  </div>
                </Slider>
              ) : changeImgBlue ? (
                <Slider {...settings}>
                  <div className={cx("sliderImg")}>
                    <img src={data.imgBlue} alt="" />
                  </div>{" "}
                </Slider>
              ) : changeImgGrey ? (
                <Slider {...settings}>
                  <div className={cx("sliderImg")}>
                    <img src={data.imgGrey} alt="" />
                  </div>{" "}
                </Slider>
              ) : changeImgYellow ? (
                <Slider {...settings}>
                  <div className={cx("sliderImg")}>
                    <img src={data.imgYellow} alt="" />
                  </div>{" "}
                </Slider>
              ) : changeImgBrown ? (
                <Slider {...settings}>
                  <div className={cx("sliderImg")}>
                    <img src={data.imgBrown} alt="" />
                  </div>{" "}
                </Slider>
              ) : changeImgBlack ? (
                <Slider {...settings}>
                  <div className={cx("sliderImg")}>
                    <img src={data.imgBlack} alt="" />
                  </div>
                </Slider>
              ) : (
                <Slider {...settings}>
                  <div className={cx("sliderImg")}>
                    <img src={data.img} alt="" />
                  </div>
                  <div className={cx("sliderImg")}>
                    <img src={data.img2} alt="" />
                  </div>
                  <div className={cx("sliderImg")}>
                    <img src={data.img3} alt="" />
                  </div>
                </Slider>
              )}

              <div className={cx("title")}>
                <span>{data.title}</span>
              </div>
              <div className={cx("main")}>
                <div className={cx("content")}>
                  <div className={cx("content-left")}>
                    <div className={cx("content-left-detail")}>
                      <h2>DETAILS</h2>
                      <p style={{ whiteSpace: "pre-line" }}>{data.details}</p>
                    </div>
                    <div className={cx("content-left-fitting")}>
                      <h2>FITTING GUIDE</h2>
                      <p>{data.fittingGuide}</p>
                    </div>
                  </div>
                  <div className={cx("content-right")}>
                    {data.fitting ? (
                      <div className={cx("content-right-fittingAvai")}>
                        <h2>FITTING AVAILABILITY</h2>
                        <p>{data.fitting}</p>
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.footSize ? (
                      <div className={cx("footSize")}>
                        <h2>{data.footSize}</h2>
                        <div className={cx("boxLeft")}>
                          <label>(L) :</label>
                          <span>
                            <select
                              onChange={(e) => handleSizeL(e)}
                              value={sizeL}
                            >
                              <option>{sizeL}</option>
                              <option>9.5</option>
                              <option>9</option>
                              <option>8.5</option>
                              <option>8</option>
                              <option>7.5</option>
                              <option>7</option>
                              <option>6.5</option>
                              <option>6</option>
                            </select>
                          </span>
                        </div>
                        <div className={cx("boxRight")}>
                          <label>(R) :</label>
                          <span>
                            <select
                              onChange={(e) => handleSizeR(e)}
                              value={sizeR}
                            >
                              <option>{sizeR}</option>
                              <option>9.5</option>
                              <option>9</option>
                              <option>8.5</option>
                              <option>8</option>
                              <option>7.5</option>
                              <option>7</option>
                              <option>6.5</option>
                              <option>6</option>
                            </select>
                          </span>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className={cx("colors")}>
                      <div className={cx("titleColors")}>
                        <h2>COLOUR</h2>
                      </div>
                      <div className={cx("color")}>
                        <div
                          className={cx("original")}
                          onClick={(data) => changeColorOrigin(data)}
                        ></div>
                        {data.imgBlack ? (
                          <div
                            className={cx("black")}
                            onClick={(data) => changeColorBlack(data)}
                          ></div>
                        ) : (
                          <></>
                        )}
                        {data.imgBrown ? (
                          <div
                            className={cx("brown")}
                            onClick={(data) => changeColorBrown(data)}
                          ></div>
                        ) : (
                          <></>
                        )}
                        {data.imgYellow ? (
                          <div
                            className={cx("yellow")}
                            onClick={(data) => changeColorYellow(data)}
                          ></div>
                        ) : (
                          <></>
                        )}
                        {data.imgGrey ? (
                          <div
                            className={cx("grey")}
                            onClick={(data) => changeColorGrey(data)}
                          ></div>
                        ) : (
                          <></>
                        )}
                        {data.imgBlue ? (
                          <div
                            className={cx("blue")}
                            onClick={(data) => changeColorBlue(data)}
                          ></div>
                        ) : (
                          <></>
                        )}
                        {data.imgGreen ? (
                          <div
                            className={cx("green")}
                            onClick={(data) => changeColorGreen(data)}
                          ></div>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    {/* <div
                        className={cx("black")}
                        onClick={(data) => changeColor(data)}
                      ></div> */}
                    <div className={cx("sole")}>
                      {data.sole ? (
                        <div className={cx("title-sole")}>
                          <h2>SOLE :</h2>
                        </div>
                      ) : (
                        <></>
                      )}

                      <div className={cx("sole-content")}>
                        {data.soleText3 ? (
                          <div
                            className={cx(`first-sole ${sole ? "active" : ""}`)}
                            onClick={(data) => handleActive(data)}
                          >
                            <div className={cx("title-first-sole")}>
                              <p>{data.soleText3}</p>
                            </div>
                            <div className={cx("img-first-sole")}>
                              <img src={data.sole3} alt=""></img>
                            </div>
                          </div>
                        ) : (
                          <></>
                        )}
                        {data.soleText ? (
                          <div
                            className={cx(
                              `first-sole ${sole2 ? "active" : ""}`
                            )}
                            onClick={(data) => handleActive2(data)}
                          >
                            <div className={cx("title-first-sole")}>
                              <p>{data.soleText}</p>
                            </div>
                            <div className={cx("img-first-sole")}>
                              <img src={data.sole} alt=""></img>
                            </div>
                          </div>
                        ) : (
                          <></>
                        )}
                        {data.soleText2 ? (
                          <div
                            className={cx(
                              `first-sole ${sole3 ? "active" : ""}`
                            )}
                            onClick={(data) => handleActive3(data)}
                          >
                            <div className={cx("title-first-sole")}>
                              <p>{data.soleText2}</p>
                            </div>
                            <div className={cx("img-first-sole")}>
                              <img src={data.sole2} alt=""></img>
                            </div>
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    <div className={cx("total")}>
                      <h2>TOTAL (PER ITEM)</h2>
                      <span>
                        {price ? (
                          <div>{parseInt(data.price) + Number(50)} $</div>
                        ) : (
                          <div>{data.price} $</div>
                        )}{" "}
                      </span>
                      {console.log(price)}
                    </div>
                    <div className={cx("addCart")}>
                      <button onClick={() => handleAdd(data)}>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
