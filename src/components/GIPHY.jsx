import React, { Component } from "react";
// import StackGrid, { transitions } from "react-stack-grid";
import Gallery from "react-stack-gallery";
import "../GIPHY.css";

export default class GIPHY extends Component {
  state = {
    data: []
  };

  constructor(props) {
    super(props);
    this.state.data = this.props.gifs;
  }

  componentWillReceiveProps(props) {
    this.setState({ data: props.gifs });
  }

  render() {
    console.log(this.state.data);
    if (this.state.data.data) {
      return (
        <Gallery>
          {this.state.data.data.map((gif, index) => {
            return (
              <img
                className="card"
                key={index}
                src={gif.images.original.url}
                alt="gif"
              />
            );
          })}
        </Gallery>
      );
    } else {
      return <h1>Loading..</h1>;
    }
  }
}
