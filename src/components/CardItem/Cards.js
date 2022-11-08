import React, { useState } from "react";
import CardItem from "./CardItem";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
import styles from "./Cards.module.scss";
import { addProduct } from "../../redux/addToCart";
import { Link } from "@mui/material";
const cx = classNames.bind(styles);
export default function Cards(props) {
  const { bag, setBag, foot, setFoot, apron, setApron } = props;
  // const dispatch = useDispatch();
  // // const add = useSelector((state) => state.add.cart);
  // const handleAdd = (product) => {
  //   dispatch(addProduct(product));
  // };
  const [reset, setReset] = useState(false);
  const handleSelect = (e) => {
    if (e === "BAG") {
      setBag(true);
      console.log("bag oke ne");
    } else {
      setBag(false);
      console.log("bag KH ne");
    }
    if (e === "FOOTWEAR") {
      setFoot(true);
      console.log("FOOT WEART bag oke ne");
    } else {
      setFoot(false);
      console.log("FOOT WEART bag KH ne");
    }
    if (e === "APRON") {
      setApron(true);
      console.log("APRON WEART bag oke ne");
    } else {
      setApron(false);
      console.log("APRON WEART bag KH ne");
    }
  };
  const bagProducts = useSelector((state) => state.products.bagProducts);
  const footProducts = useSelector((state) => state.products.footProducts);
  const apronProducts = useSelector((state) => state.products.apronProducts);

  const allProducts = useSelector((state) => state.products.allProducts);
  // const handleReset = () => {
  //   setReset(true);
  //   if (reset) {
  //     ;
  //   }
  // };
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
      <div className={cx("option")}>
        <div className={cx("left")} style={{ cursor: "pointer" }}>
          <span>LOOKING FOR: </span>
        </div>
        <select
          onChange={(e) => handleSelect(e.target.value)}
          className={cx("right")}
        >
          <option value="ALL">All</option>
          <option value="BAG">BAG</option>
          <option value="FOOTWEAR">FOOTWEAR</option>
          <option value="APRON">APRON</option>
        </select>
        {/* <div className={cx("reset")}>
          <span onClick={handleReset()}>RESET</span>
        </div> */}
      </div>
      <div className={cx("flexCard")}>
        {bag
          ? bagProducts.map((bag) => {
              return (
                <CardItem
                  id={bag.id}
                  product={bag}
                  form={bag.form}
                  title={bag.title}
                  img={bag.img}
                  price={bag.price}
                ></CardItem>
              );
            })
          : foot
          ? footProducts.map((foot) => {
              return (
                <CardItem
                  id={foot.id}
                  product={foot}
                  form={foot.form}
                  title={foot.title}
                  img={foot.img}
                  price={foot.price}
                ></CardItem>
              );
            })
          : apron
          ? apronProducts.map((apron) => {
              return (
                <CardItem
                  id={apron.id}
                  product={apron}
                  form={apron.form}
                  title={apron.title}
                  img={apron.img}
                  price={apron.price}
                ></CardItem>
              );
            })
          : allProducts.map((product, id) => {
              return (
                <div key={id}>
                  <CardItem
                    id={product.id}
                    product={product}
                    form={product.form}
                    title={product.title}
                    img={product.img}
                    price={product.price}
                  ></CardItem>
                </div>
              );
            })}

        {/* {allProducts.map((product, id) => {
          return (
            <div key={id}>
              <CardItem
                id={product.id}
                product={product}
                form={product.form}
                title={product.title}
                img={product.img}
                price={product.price}
              ></CardItem>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}
