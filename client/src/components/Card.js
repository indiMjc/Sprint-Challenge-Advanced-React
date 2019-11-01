import React from "react";
import axios from "axios";

class Card extends React.Component {
  state = {
    fetchedData: []
  };

  async componentDidMount() {
    await axios
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
    console.log(this.state.data);
    if (!this.state.data) {
      return <h1>Loading...</h1>;
    }
    return (
      <>
        {this.state.data.map((person, i) => (
          <>
            <h1 key={person.name}>Name: {person.name}</h1>
            <h2 key={i}>Country: {person.country}</h2>
            <h3 key={Date.now()}>Searches: {person.searches}</h3>
          </>
        ))}
      </>
    );
  }
}

export default Card;
