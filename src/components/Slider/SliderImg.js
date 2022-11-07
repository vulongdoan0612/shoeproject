import React from "react";
import Slider from "react-slick";
import classNames from "classnames/bind";
import styles from "../Navbar/Navbar.module.scss";
const cx = classNames.bind(styles);

export default function SliderImg() {
  const settings = {
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      style={{ marginLeft: "3vw", marginRight: "3vw" }}
      className={cx("slider")}
    >
      <Slider {...settings}>
        <div>
          <img
            src="https://wootten.com.au/media/cache/99e8210235ed935a2e33144102e2fafd10dd7578.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://wootten.com.au/media/cache/cec804ea6833daeb2f4839311011123c9e09d5ad.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://wootten.com.au/media/cache/018348b284524f655d065d92ab3f9407b1d18930.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://wootten.com.au/media/cache/0ce06eb2deb17bf88a9ca69752bfe764bdced3ea.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://wootten.com.au/media/cache/c014e2aa66bf04e28401c242182ceef07ee966bd.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://wootten.com.au/media/cache/44cffaad2122d20667b2338dc753ff04f3333113.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}
