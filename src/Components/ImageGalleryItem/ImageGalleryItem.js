import React from "react";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ image, toggleModalWin }) => {
  console.log(image);
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={image.webformatURL}
        alt={image.webformatURL}
        className={styles.ImageGalleryItemimage}
        onClick={() => {
          toggleModalWin(image.largeImageURL);
        }}
      />
    </li>
  );
};

export default ImageGalleryItem;
