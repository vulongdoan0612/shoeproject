import React from "react";
import classNames from "classnames/bind";
import styles from "./CartItem.module.scss";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, decreaseProduct, getTotals } from "../../redux/addToCart";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

export default function CartItem(props) {
  const color = useSelector((state) => state.add.info);
  const dispatch = useDispatch();
  const {
    getCart,
    // changeImg,
    // sizeL,
    // sizeR,
    // changeImgGreen,
    // changeImgBlue,
    // changeImgGrey,
    // changeImgYellow,
    // changeImgBrown,
    // changeImgBlack,
    // changeImgOriginal,
    // price,
    // setPrice,
  } = props;
  const handleUp = (get, price) => {
    dispatch(addProduct(get, price));
  };

  const handleDown = (get) => {
    dispatch(decreaseProduct(get));
  };
  return (
    <>
      {getCart.map((get) => {
        return (
          <div className={cx("wrapper")}>
            <div className={cx("card")}>
              <div className={cx("leftCard")}>
                <Link to={`/card-detail/${get.id}`}>
                  <div className={cx("cardImg")}>
                    <img src={get.img} alt=""></img>
                  </div>
                  {/* {changeImg ? (
                    <div className={cx("cardImg")}>
                      <img src={get.img} alt=""></img>
                    </div>
                  ) : changeImgGreen ? (
                    <div className={cx("cardImg")}>
                      <img src={get.imgGreen} alt=""></img>
                    </div>
                  ) : changeImgBlue ? (
                    <div className={cx("cardImg")}>
                      <img src={get.imgBlue} alt=""></img>
                    </div>
                  ) : changeImgGrey ? (
                    <div className={cx("cardImg")}>
                      <img src={get.imgGrey} alt=""></img>
                    </div>
                  ) : changeImgYellow ? (
                    <div className={cx("cardImg")}>
                      <img src={get.imgYellow} alt=""></img>
                    </div>
                  ) : changeImgBrown ? (
                    <div className={cx("cardImg")}>
                      <img src={get.imgBrown} alt=""></img>
                    </div>
                  ) : changeImgBlack ? (
                    <div className={cx("cardImg")}>
                      <img src={get.imgBlack} alt=""></img>
                    </div>
                  ) : changeImgOriginal ? (
                    <div className={cx("cardImg")}>
                      <img src={get.img} alt=""></img>
                    </div>
                  ) : (
                    <div className={cx("cardImg")}>
                      <img src={get.img} alt=""></img>
                    </div>
                  )} */}
                </Link>
                <div className={cx("cardInfo")}>
                  <p>{get.title}</p>
                  {/* {changeImg ? (
                    <p>COLOR: ORIGINAL</p>
                  ) : changeImgGreen ? (
                    <p>COLOR: GREEN</p>
                  ) : changeImgBlue ? (
                    <p>COLOR: BLUE</p>
                  ) : changeImgGrey ? (
                    <p>COLOR: GREY</p>
                  ) : changeImgYellow ? (
                    <p>COLOR: YELLOW</p>
                  ) : changeImgBrown ? (
                    <p>COLOR: BROWN</p>
                  ) : changeImgBlack ? (
                    <p>COLOR: BLACK</p>
                  ) : (
                    <p>COLOR: ORIGINAL</p>
                  )} */}
                  {/* <div
                    className={cx("footSize")}
                    style={{ flexDirection: "row" }}
                  >
                    <p>L : {sizeL}</p>
                    <p>R : {sizeR}</p>
                  </div> */}
                </div>
              </div>
              <div className={cx("qnty")}>
                <input style={{ width: "3vw" }} value={get.cartQuantity} />
                <div className={cx("arrow")}>
                  <div className={cx("arrow-up")} onClick={() => handleUp(get)}>
                    <ArrowDropUpIcon></ArrowDropUpIcon>
                  </div>
                  <div
                    className={cx("arrow-down")}
                    onClick={() => handleDown(get)}
                  >
                    <ArrowDropDownIcon></ArrowDropDownIcon>
                  </div>
                </div>
              </div>
              <div className={cx("cardPrice")}>
                <span>
                  <div>{get.price * get.cartQuantity} $</div>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
