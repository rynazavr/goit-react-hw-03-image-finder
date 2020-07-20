import React from "react";
import styles from "./Button.module.css";

const Button = ({ onSomething }) => {
  return (
    <button className={styles.Button} onClick={onSomething}>
      Load more
    </button>
  );
};

export default Button;
