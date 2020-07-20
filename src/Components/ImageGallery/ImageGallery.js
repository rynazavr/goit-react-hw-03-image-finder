import React, { Component } from "react";
import Searchbar from "../Searchbar/Searchbar";
import Button from "../Button/Button";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import imagesApi from "../../helpers/request";
import styles from "./ImageGallery.module.css";
// import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Modal from "../Modal/Modal";

class ImageGallery extends Component {
  state = {
    images: [],
    loader: true,
    error: false,
    searchQuery: "",
    page: 1,
    showModal: false,
    imageModal: "",
  };

  toggleModal = (largeImage) => {
    this.setState((state) => ({
      showModal: !state.showModal,
      imageModal: largeImage,
    }));
  };

  toggleModalClose = () => {
    this.setState((state) => ({
      showModal: !state.showModal,
      imageModal: "",
    }));
  };

  fetchImages = (query, page) => {
    let scrollHeight = 0;
    if (page === 1) {
      scrollHeight = 0;
    } else {
      scrollHeight = document.documentElement.scrollHeight - 144;
    }
    console.log("query", query);
    imagesApi
      .fetchImagesWithQuery(query, page)
      .then((images) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          loader: false,
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loader: false }));
    window.scrollTo({
      top: scrollHeight,
      behavior: "smooth",
    });
  };
  handleSearchFormSubmit = (query) => {
    console.log(query);
    this.setState({ searchQuery: query, page: 1, images: [] });
  };
  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery || prevState.page !== page) {
      this.fetchImages(nextQuery, page);
    }
  }

  render() {
    const { images, loader, error, showModal, imageModal } = this.state;
    if (error) {
      return <h1>Woops, something went wrong. Try again later!</h1>;
    }
    return (
      <>
        <Searchbar
          onSubmit={this.handleSearchFormSubmit}
          fetchImages={this.fetchImages}
        />
        <ul className={styles.ImageGallery}>
          {images.map((image) => (
            <ImageGalleryItem
              image={image}
              toggleModalWin={this.toggleModal}
              key={image.id}
            />
          ))}
        </ul>

        {!!images.length && <Button onSomething={this.fetchImages} />}
        {showModal && (
          <Modal imageModal={imageModal} onClose={this.toggleModalClose} />
        )}
      </>
    );
  }
}

export default ImageGallery;
