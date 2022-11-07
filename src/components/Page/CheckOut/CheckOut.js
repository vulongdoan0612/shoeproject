import React from "react";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";
import styles from "./CheckOut.module.scss";
export default function CheckOut() {
  const cx = classNames.bind(styles);

  const cart = useSelector((state) => state.add.cart);
  const total = useSelector((state) => state.add);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("checkout")}>
        <span>CHECKOUT</span>
      </div>
      <div className={cx("content")}>
        <div className={cx("order")}>
          <h2>YOUR ORDER</h2>
        </div>
        <div className={cx("qntyCard")}>
          <div className={cx("qnty")}>
            <p>PRODUCT</p>
            <p>QUANTITY</p>
            <p>TOTAL</p>
          </div>
        </div>
      </div>
      {cart.map((cart) => {
        return (
          <div className={cx("products")}>
            <div
              style={{
                width: "60vw",
                display: "flex",
                justifyContent: "space-evenly",
                borderBottom: "1px solid #e4e5e6",
                marginTop: "10px",
              }}
            >
              <div className={cx("title")}>
                <p>{cart.title}</p>
              </div>
              <div className={cx("soluong")}>
                <p>{cart.cartQuantity}</p>
              </div>
              <div className={cx("price")}>
                <p>{cart.price * cart.cartQuantity} $</p>
              </div>
            </div>
          </div>
        );
      })}
      <div className={cx("flex-total")}>
        <div className={cx("total")}>
          <h2>TOTAL</h2>
          <p>{total.cartTotalAmount} $</p>
        </div>
      </div>
      {/* <div className={cx('flex-contact')}>
        <div className={cx("contact")}>
          <div className={cx("left-contact")}>
            <h2>CONTACT INFORMATION</h2>
            <div className={cx("name")}>
              <label>Full name</label>
              <input type="text"></input>
            </div>
            <div className={cx("phone")}>
              <label>Phone number</label>
              <input type="text"></input>
            </div>
            <div className={cx("email")}>
              <label>Email</label>
              <input type="text"></input>
            </div>
          </div>
          <div className={cx("right-contact")}>
            <h2>SHIPPING ADDRESS</h2>
            <div className={cx("addres1")}>
              <label>Address line 1</label>
              <input type="text"></input>
            </div>
            <div className={cx("addres2")}>
              <label>Address line 2</label>
              <input type="text"></input>
            </div>
            <div className={cx("city")}>
              <label>City/Town</label>
              <input type="text"></input>
            </div>
            <div className={cx("state")}>
              <label>State/Province</label>
              <input type="text"></input>
            </div>
            <div className={cx("post")}>
              <label>Postcode</label>
              <input type="text"></input>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
