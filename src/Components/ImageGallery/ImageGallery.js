import React, { Component } from "react";
import Searchbar from "../Searchbar/Searchbar";
import Button from "../Button/Button";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import imagesApi from "../../helpers/request";
import styles from "./ImageGallery.module.css";
import Loader from "react-loader-spinner";
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
  };
  handleSearchFormSubmit = (query) => {
    console.log(query);
    this.setState({ searchQuery: query, page: 0, images: [] });
  };
  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    console.log("nextQuery", nextQuery);
    console.log("prevQuery", prevQuery);
    if (prevQuery !== nextQuery) {
      // this.fetchImages(nextQuery);
    }
  }

  // async componentDidMount() {
  //   const url = withCredentials(`https://pixabay.com/`);
  //   try {
  //     const result = await request(url);
  //     this.setState({ images: result.hits, loader: false });
  //   } catch (error) {
  //     this.setState({ error: true, loader: false });
  //   }
  // }

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
