import React from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Cart from "../../Cart/Cart";

const cx = classNames.bind(styles);
export default function HomePage() {
  return (
    <div
      className={cx("wrapper")}
      style={{ position: "relative", paddingLeft: "5vw", paddingRight: "5vw" }}
    >
      <Cart />
    </div>
  );
}
