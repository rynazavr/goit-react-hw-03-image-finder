import React, { Component } from "react";
import styles from "./Modal.module.css";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        this.props.onClose();
      }
    });
  }
  render() {
    return (
      <div className={styles.Overlay} onClick={this.props.onClose} alt="">
        <div className={styles.Modal}>
          <img src={this.props.imageModal} />
        </div>
      </div>
    );
  }
}
