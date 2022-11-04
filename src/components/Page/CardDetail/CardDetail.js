import React from "react";
import classNames from "classnames/bind";
import styles from "./CardDetail.module.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { addProduct } from "../../../redux/addToCart";

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
  const [data, setData] = useState([]);
  //sử dụng useParams để lấy thông tin từ id card ra thay vì truyền props
  const { id } = useParams();
  const compare = () => {
    let compareData = productDetail.filter((data) => {
      return data.id == id;
    });
    setData(compareData);
    console.log(data);
  };
  useEffect(() => {
    compare();
  }, [id]);

  const changeColorBlack = (data) => {
    console.log("b", changeImgBlack);
    setChangeImgBlack(true);
    setChangeImgBrown(false);
    setChangeImgBlue(false);
    setChangeImgGreen(false);

    setChangeImgGrey(false);
    setChangeImgYellow(false);
    setChangeImg(false);
  };
  const changeColorBrown = (data) => {
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
    console.log("bl", changeImgBlue);
    setChangeImgBlack(false);
    setChangeImgBrown(false);
    setChangeImgBlue(true);
    setChangeImgGreen(false);

    setChangeImgGrey(false);
    setChangeImgYellow(false);
    setChangeImg(false);
  };
  const changeColorGreen = (data) => {
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
  return (
    <div className={cx("wrapper")}>
      {data.map((data, idx) => {
        return (
          <>
            <div
              key={idx}
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
                              <option>10</option>
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
                      <div
                        className={cx("original")}
                        onClick={(data) => changeColorOrigin(data)}
                      ></div>
                    </div>
                    {/* <div
                        className={cx("black")}
                        onClick={(data) => changeColor(data)}
                      ></div> */}
                    <div className={cx("addCart")}>
                      <button onClick={() => handleAdd(data)}>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
