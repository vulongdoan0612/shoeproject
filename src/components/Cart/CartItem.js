import React from "react";
import classNames from "classnames/bind";
import styles from "./CartItem.module.scss";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, decreaseProduct, getTotals } from "../../redux/addToCart";
const cx = classNames.bind(styles);

export default function CartItem(props) {
  const dispatch = useDispatch();
  const { getCart } = props;
  const handleUp = (get) => {
    dispatch(addProduct(get));
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
                <div className={cx("cardImg")}>
                  <img src={get.img} alt=""></img>
                </div>
                <div className={cx("cardInfo")}>
                  <p>{get.title}</p>
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
                <span>{get.price * get.cartQuantity} $</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
