import React, { Component } from "react";
import GIPHY from "./components/GIPHY";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import "./styles.css";

const api = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs"
});

export default class App extends Component {
  state = {
    gif: {},
    limit: 25,
    search: false,
    searchItem: ""
  };

  componentDidMount() {
    this.trending();
  }

  trending = () => {
    api
      .get("/trending", {
        params: {
          api_key: "uO772yr4y0pnampsMeffYl3pWARrFWT1",
          limit: this.state.limit,
          rating: "g"
        }
      })
      .then((response) => {
        // console.log(response.data);
        this.setState({ gif: response.data });
        // console.log(this.state.gif);
      });
  };

  search = (q) => {
    this.setState({ searchItem: q });
    this.setState({ search: true });
    api
      .get("/search", {
        params: {
          api_key: "uO772yr4y0pnampsMeffYl3pWARrFWT1",
          q: q,
          limit: this.state.limit,
          rating: "g",
          lang: "en"
        }
      })
      .then((response) => {
        // console.log(response);
        this.setState({ gif: response.data });
        console.log(this.state.gifs);
      });
  };

  loadMore = () => {
    this.setState({
      limit: this.state.limit + 25
    });
    if (this.state.search === true) {
      this.search(this.state.searchItem);
    } else {
      this.trending();
    }
  };

  render() {
    return (
      <div className="App">
        <div className="title">Giphy..</div>
        <SearchBar onSearch={this.search} />
        <GIPHY gifs={this.state.gif} />
        <button className="load-more" onClick={this.loadMore}>
          Load More..
        </button>
      </div>
    );
  }
}
