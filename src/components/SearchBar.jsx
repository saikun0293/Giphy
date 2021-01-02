import React, { Component } from "react";
import "../SearchBar.css";

export default class SearchBar extends Component {
  state = {
    data: [],
    search: ""
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <input
          name="search"
          className="input-gif"
          type="text"
          onChange={this.handleInput}
        />
        <button
          className="go"
          type="submit"
          onClick={() => this.props.onSearch(this.state.search)}
        >
          Go!
        </button>
      </div>
    );
  }
}
