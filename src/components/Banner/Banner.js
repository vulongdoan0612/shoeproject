import React from "react";
import classNames from "classnames/bind";
import styles from "./Banner.module.scss";
const cx = classNames.bind(styles);

export default function Banner() {
  return (
    <div className={cx("banner")}>
      <div className={cx("firstBanner")}>
        <div className={cx("headerFirst")}>
          <img
            src="https://wootten.com.au/assets/images/ir/services.7bf0548.png"
            alt=""
          ></img>
        </div>
        <div className={cx("cardLeftFirst")}>
          <p>Standard Made-To-Over Footwear</p>
          <img
            style={{ filter: "blur(1px)" }}
            src="https://wootten.com.au/media/cache/633f5b08b7c717ddc3e0e4c3ec521be805455335.jpg"
            alt=""
          ></img>
        </div>
        <div className={cx("cardRightFirst")}>
          <p>Custom-fit/Bespoke footwear</p>
          <img
            style={{ filter: "blur(1px)" }}
            src="https://wootten.com.au/media/cache/d5165df0a52541cb09213ec231182e5db7b22a36.jpg"
            alt=""
          ></img>
        </div>
      </div>
      <div className={cx("cecondBanner")}>
        <div className={cx("leftSecond")}>
          <img
            className={cx("titleLeft")}
            src="https://wootten.com.au/assets/images/ir/our-heritage.7dbd653.png"
            alt=""
          ></img>
          <img
            className={cx("imgLeft")}
            src="https://wootten.com.au/assets/images/home/heritage.9855945.jpg"
            alt=""
          ></img>
        </div>
        <div className={cx("rightSecond")}>
          <img
            className={cx("titleRight")}
            src="https://wootten.com.au/assets/images/ir/our-process.c9b9ad6.png"
            alt=""
          ></img>
          <img
            className={cx("imgRight")}
            src="https://wootten.com.au/assets/images/home/process.09a83e9.jpg"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
}
