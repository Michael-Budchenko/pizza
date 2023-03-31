import React from "react";
import styles from "./NotFoundBlock.module.scss";

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <span>😐</span>
      <h1> Нічого не знайдено ;(</h1>
      <p className={styles.description}> Нажаль данна сторінка відсутня</p>
    </div>
  );
}

export default NotFoundBlock;
