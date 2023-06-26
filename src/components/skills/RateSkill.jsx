import React from "react";
import styles from "./RateSkill.module.css";
const RateSkill = ({ name, rating, bgcolor }) => {
  const widthPercentage1 = rating;
  const widthPercentage2 = "3%";
  const circlePercentage = "1%";

  const widthValue1 = parseInt(widthPercentage1, 10);
  const widthValue2 = parseInt(widthPercentage2, 10);
  const circlePercentage2 = parseInt(circlePercentage, 10);

  const resultWidth = widthValue1 + widthValue2;
  const circleWidth = widthValue1 - circlePercentage2;
  const resultWidthPercentage = `${resultWidth}%`;
  const circleWidthPercentage = `${circleWidth}%`;
  return (
    <div className={styles.rateConatiner}>
      <div className={styles.labels} style={{ width: resultWidthPercentage }}>
        <label>{name}</label>
        <label style={{ fontSize: "12px" }}>
          <strong style={{ color: bgcolor }}>{rating}</strong>
        </label>
      </div>
      <div className={styles.progressBorder}>
        <div
          className={styles.progressBar}
          style={{ width: rating, backgroundColor: bgcolor }}
        >
          <div className={styles.progress} style={{ width: rating }}></div>
        </div>
        <div
          className={styles.circle}
          style={{ left: circleWidthPercentage, backgroundColor: bgcolor }}
        ></div>
      </div>
    </div>
  );
};

export default RateSkill;
