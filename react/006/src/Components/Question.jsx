import React from "react";
import styles from "./Question.module.css";

const Question = () => {
  return (
    <div className={styles.box}>
      <h1>test1</h1>
      <h2 className={styles.text}>test2</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
        corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
        aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
        Nemo, ullam.
      </p>
    </div>
  );
};

export default Question;