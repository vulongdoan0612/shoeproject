import React from "react";
import classNames from "classnames/bind";
import styles from "./CardItem.module.scss";

const cx = classNames.bind(styles);
export default function CardItem(props) {
  const { title, img, price, form } = props;
  return (
    <div className={cx("wrapper")}>
      <div className={cx("card")}>
        <div className={cx("card_img")}>
          <img src={img} alt=""></img>
        </div>
        <span className={cx("viewItem")}>View Item</span>
        <div className={cx("card_type")}>
          <span>{form}</span>
        </div>
        <div className={cx("card_bottom")}>
          <div className={cx("card_name")}>
            <h1>{title}</h1>
          </div>
          <div className={cx("card_price")}>
            <span>{price} $</span>
          </div>
        </div>
      </div>
    </div>
  );
}
