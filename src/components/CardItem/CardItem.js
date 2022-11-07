import React from "react";
import classNames from "classnames/bind";
import styles from "./CardItem.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/addToCart";

const cx = classNames.bind(styles);
export default function CardItem(props) {
  const dispatch = useDispatch();
  // const add = useSelector((state) => state.add.cart);
  const handleAdd = (product) => {
    dispatch(addProduct(product));
  };
  const { title, img, price, form, id, product } = props;
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
            <div className={cx("card_name")} onClick={() => handleAdd(product)}>
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
