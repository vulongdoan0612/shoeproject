import React from "react";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("footer")}>
        <p>Created since 2022</p>
        <div className={cx("img")}>
          <img
            src="https://wootten.com.au/assets/images/ir/follow@2x.c27a922.png"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
}
