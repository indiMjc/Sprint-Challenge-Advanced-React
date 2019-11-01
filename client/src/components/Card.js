import React from "react";
import axios from "axios";
import Name from "./Name";

class Card extends React.Component {
  state = {
    fetchedData: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res);
        this.setState({
          data: res.data
        });
      })
      .catch(err => {
        console.log("the data was not returned", err);
      });
  }

  render() {
    if (!this.state.data) {
      return <h1>Loading...</h1>;
    }
    return (
      <>
        {this.state.data.map((person, i) => (
          <>
            <Name key={person.name} name={person.name} />
            <h2 key={i}>Country: {person.country}</h2>
            <h3 key={Date.now()}>Searches: {person.searches}</h3>
          </>
        ))}
      </>
    );
  }
}

export default Card;
