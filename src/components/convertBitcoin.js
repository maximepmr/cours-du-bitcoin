import React, { Component } from 'react';

class ConvertBitcoin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            bitCoinPrice: "00",
            result: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {


        let value = event.target.value;
        fetch('https://api.coindesk.com/v1/bpi/currentprice/EUR.json')
        .then((res) => {
            return res.json()
        })
        .then(jsonData => {

            let bitcoinEur = jsonData.bpi.EUR.rate;
            let intBitcoin = Number(bitcoinEur.replace(",", ""));
            bitcoinEur = bitcoinEur.replace(",", " ");


            console.log(intBitcoin);
            let val =  value * intBitcoin;            

            this.setState({ 
                result: val,
                value: value,
                bitCoinPrice: bitcoinEur 
            })
        });

    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Vos Bitoin:
                    <input type="number" value={this.state.value} onChange={this.handleChange} />
                </label>
                Euro : {this.state.result} €
            </form>
        );
    }

}

export default ConvertBitcoin;
