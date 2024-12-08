import React, { Component } from "react";
import Cars from "./Cars";

class Mycars extends Component {
  state = {
    voitures: [
      { name: "Ford", color: "red", year: 2000 },
      { name: "Mercedes", color: "black", year: 2010 },
      { name: "Peugeot", color: "green", year: 2018 },
    ],

    titre : 'Mon catalogue voitures  2 '
  };


  addTenYears = () => {

    const recupereDate = this.state.voitures.map((param) => {
      return (param.year -= 10);
    });

    this.setState({
        recupereDate
    });
  };

  render() {
    // date d aujourd'hui avec annee seulement
    const dateNow = new Date().getFullYear();

    return (
      <div>
        <h1>{this.state.titre}</h1>
        <button onClick={this.addTenYears}>Age +10 ans</button>
        <Cars
          year={dateNow - this.state.voitures[0].year + " ans"}
          color={this.state.voitures[0].color}
          sortie={this.state.voitures[0].year}
        >
          {this.state.voitures[0].name}
        </Cars>
        <Cars
          year={dateNow - this.state.voitures[1].year + " ans"}
          color={this.state.voitures[1].color}
          sortie={this.state.voitures[1].year}
        >
          {this.state.voitures[1].name}
        </Cars>
        <Cars
          year={dateNow - this.state.voitures[2].year + " ans"}
          color={this.state.voitures[2].color}
          sortie={this.state.voitures[2].year}
        >
          {this.state.voitures[2].name}
        </Cars>
      </div>
    );
  }
}

export default Mycars;
