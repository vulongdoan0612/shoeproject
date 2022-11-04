import React from "react";
import classNames from "classnames/bind";
import styles from "./CardItem.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
export default function CardItem(props) {
  const { title, img, price, form, id } = props;
  return (
    <div className={cx("wrapper")}>
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to={`/card-detail/${id}`}
      >
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
      </Link>
    </div>
  );
}
