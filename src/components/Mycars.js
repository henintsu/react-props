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
        {
          this.state.voitures.map((voiture , index) => {
            return(
              <div key={index}>
                <Cars nom={voiture.name} color={voiture.color} sortie={voiture.year} year={dateNow - voiture.year + " ans"} />
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Mycars;
