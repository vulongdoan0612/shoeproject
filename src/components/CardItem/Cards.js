import React from "react";
import CardItem from "./CardItem";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
import styles from "./Cards.module.scss";
import { addProduct } from "../../redux/addToCart";
const cx = classNames.bind(styles);
export default function Cards() {
  const dispatch = useDispatch();
  // const add = useSelector((state) => state.add.cart);
  const handleAdd = (product) => {
    dispatch(addProduct(product));
  };

  const allProducts = useSelector((state) => state.products.allProducts);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("workShop")}>
        <div className={cx("workShop-img")}>
          <img
            src="https://wootten.com.au/assets/images/ir/latest-from-the-workshop.d2d15d0.png"
            alt=""
          ></img>
        </div>
        <div
          style={{
            backgroundColor: "black",
            width: "90%",
            marginLeft: "10%",
            borderTop: "1px solid black",
            height: "2px",
          }}
        >
          <span></span>
        </div>
        <div>
          <span>BROWSE SHOP</span>
        </div>
      </div>
      <div className={cx("flexCard")}>
        {allProducts.map((product, id) => {
          return (
            <div onClick={() => handleAdd(product)} key={id}>
              <CardItem
                product={product}
                form={product.form}
                title={product.title}
                img={product.img}
                price={product.price}
              ></CardItem>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}
