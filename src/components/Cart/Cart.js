import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getTotals } from "../../redux/addToCart";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const cx = classNames.bind(styles);

export default function Cart() {
  const cart = useSelector((state) => state.add);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  const getCart = useSelector((state) => state.add.cart);
  return (
    <div
      className={cx("wrapper")}
      style={{
        paddingLeft: "5vw",
        paddingRight: "5vw",
        background: "#f0f0f0",
      }}
    >
      <div className={cx("title")}>
        <h1>
          <span>Your Cart</span>
        </h1>
      </div>
      {getCart.length > 0 ? (
        <>
          {" "}
          <div className={cx("qntyCard")}>
            <div className={cx("qnty")}>
              <p>PRODUCT</p>
              <p>QUANTITY</p>
              <p>TOTAL</p>
            </div>
          </div>
          <CartItem getCart={getCart} />
          <input
            value="CHECKOUT"
            type="submit"
            className={cx("checkout")}
          ></input>
          <div className={cx("bottom")}>
            <div className={cx("subtotal")}>
              <div className={cx("flexbox")}>
                <p>SUBTOTAL</p>
                <p>{cart.cartTotalAmount} $</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className={cx("empty")}>
          <p>Your cart is currently empty.</p>
          <Link to="/" className={cx("return")}>
            <span>
              {" "}
              <ArrowBackIcon></ArrowBackIcon>RETURN SHOP
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}
