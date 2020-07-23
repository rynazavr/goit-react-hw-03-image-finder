import React, { Component } from "react";
import styles from "./Searchbar.module.css";

export default class Searchbar extends Component {
  state = {};
  // handleChange = (e) => {
  //   this.setState({ inputValue: e.target.value });
  // };
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.fetchImages(this.state.inputValue);
  //   this.props.onSubmit(this.state.inputValue);
  // };
  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.props.handleSubmit}>
          <button type="submit" className={styles.SearchFormbutton}>
            <span className={styles.SearchFormbuttonlabel}>Search</span>
          </button>

          <input
            className={styles.SearchForminput}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.props.searchQuery}
            onChange={this.props.handleChange}
          />
        </form>
      </header>
    );
  }
}
