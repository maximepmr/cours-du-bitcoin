import React, { Component } from 'react';

class BitcoinValue extends Component {

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
                  <div className="bitcoinpricemobile">
                      {this.state.bitCoinPrice} €
                  </div>
            );
        } else {
            return (
                  <div className="bitcoinprice">
                      {this.state.bitCoinPrice} €
                  </div>
            );
        }
    }

}

export default BitcoinValue;
