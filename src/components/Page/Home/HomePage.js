import React from "react";
import Cards from "../../CardItem/Cards";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Banner from "../../Banner/Banner";
import SliderImg from "../../Slider/SliderImg";

const cx = classNames.bind(styles);
export default function HomePage(props) {
  const { setBag, bag, foot, setFoot, apron, setApron } = props;
  return (
    <div
      className={cx("wrapper")}
      style={{ position: "relative", paddingLeft: "5vw", paddingRight: "5vw" }}
    >
      <SliderImg></SliderImg>
      <Cards
        setBag={setBag}
        bag={bag}
        foot={foot}
        setFoot={setFoot}
        setApron={setApron}
        apron={apron}
      />
      <Banner></Banner>
    </div>
  );
}
