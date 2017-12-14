import React, { Component } from 'react';
import logo from './bitcoinn.png';
import './App.css';

import BitcoinValue from './components/bitcoinValue';
import ConvertBitcoin from './components/convertBitcoin';

class App extends Component {

    constructor(props) {
      super(props)
    }

    componentDidMount() {
    }
  
  render() {
      return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenue sur le cours du Bitcoin</h1>
        </header>
        <h2>Voici actuellement le prix d'un bitcoin :</h2>
        <br />
        <br />
        <BitcoinValue />
        <div className="textemobile">
            Pas la peine de recharger la page, les données sont mises à jour automatiquement toutes les secondes.
        </div>
        <br />
        <h2>Convertir vos bitcoins en euro</h2>
        <ConvertBitcoin />
        <div className="maxime">
            maxime@pomier.fr
        </div>
      </div>
      );
  }
}

export default App;
