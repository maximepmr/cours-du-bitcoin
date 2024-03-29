import React, { Component } from 'react';
import logo from './bitcoinn.png';
import './App.css';


class App extends Component {

    constructor(props) {
      super(props)
      this.state = {
        bitCoinPrice: "00"
      }
    }


    componentDidMount() {
      this.getBitcoinPrice();
      setInterval(() => this.getBitcoinPrice(), 1000)        
    }

    getBitcoinPrice() {
      console.log("actualisation");
        fetch('https://api.coindesk.com/v1/bpi/currentprice/EUR.json')
            .then((res) => {
                return res.json()
            })
            .then(jsonData => {

                let bitcoinEur = jsonData.bpi.EUR.rate;
                bitcoinEur = bitcoinEur.replace(",", " ");
                this.setState({ bitCoinPrice: bitcoinEur })
            });

    }
  
  render() {
    const isMobile = window.innerWidth <= 500;
    if (isMobile) {
      return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenue sur le cours du Bitcoin</h1>
        </header>
        <h2>Voici actuellement le prix d'un bitcoin :</h2>
        <br />
        <br />
        <div className="bitcoinpricemobile">
            {this.state.bitCoinPrice} €
        </div>
        <div className="textemobile">
            Pas la peine de recharger la page, les données sont mises à jour automatiquement toutes les secondes.
        </div>
        <div className="maxime">
            maxime@pomier.fr
        </div>
      </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Bienvenue sur le cours du Bitcoin</h1>
          </header>
          <h2>Voici le prix actuel d'un bitcoin :</h2>
          <br />
          <br />
          <div className="bitcoinprice">
              {this.state.bitCoinPrice} €
          </div>
          <div className="maxime">
              maxime@pomier.fr
          </div>
            <div className="texte">
                Pas la peine de recharger la page, les données sont mises à jour automatiquement toutes les secondes.
            </div>
        </div>
        );
    }
  }
}

export default App;
