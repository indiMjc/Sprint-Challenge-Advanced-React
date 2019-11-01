import React from "react";
import axios from "axios";

class Card extends React.Component {
  state = {
    fetchedData: []
  };

  render() {
    return (
      <>
        <h1>name</h1>
        <h2>country</h2>
        <h3>searches</h3>
      </>
    );
  }
}

export default Card;
