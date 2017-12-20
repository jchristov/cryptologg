// ----------------------------------------------
// Imports
// ----------------------------------------------
import React, { Component } from 'react';
import axios from 'axios';

// ----------------------------------------------
// Crypto
// ----------------------------------------------
class Crypto extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      crypto: {},
      currency: true
    };

    this.toggleCurrency = this.toggleCurrency.bind(this);

    this.crypto = 'BTC,ETH,LTC,XRP,IOT,DASH';
    this.cryptoArr = ['Bitcoin', 'Ethereum', 'Litecoin', 'Ripple', 'IOTA', 'Dash'];
  }

  componentDidMount() {
    this.spotPrice(this.crypto);
    
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.spotPrice(this.crypto);
      }
    });
  }

  spotPrice(currency) {
    axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${currency}&tsyms=USD`)
      .then(response => {
        const data = response.data;
        const obj = {};

        Object.keys(data).map((value, idx) => {
          const currencyFormat = value.toLowerCase();
          const currentValue = data[value].USD;

          obj[value] = {
            lastValue: localStorage.getItem(`${currencyFormat}LastValue`),
            currentValue: currentValue,
            title: this.cryptoArr[idx]
          };

          localStorage.setItem(`${currencyFormat}LastValue`, currentValue);
        });

        this.setState({ crypto: obj });
      })
      .catch(error => {
        console.log(error);
      });
  }

  marketChange() {
    const getEmoji = emojiArr => emojiArr[Math.floor(Math.random() * emojiArr.length)];
    const toCurrency = num => `$${Number(Math.abs(num)).toFixed(2)}`;
    const toPercentage = num => `${Number(Math.abs(num)).toFixed(4)}%`;

    const positiveEmoji = ['🤑', '😎', '😋', '😍'];
    const neutralEmoji =  ['🤔', '😶', '🙃'];
    const negativeEmoji = ['😵', '😥', '🤢', '🙄', '😤'];

    return Object.keys(this.state.crypto).map(value => {
      const crypto = this.state.crypto[value];
      const lastValue = crypto.lastValue;
      const currentValue = crypto.currentValue;
      const title = crypto.title;
      let emoji = '';
      let text = '';

      if (!crypto.lastValue) {
        const firstVisitEmoji = getEmoji(positiveEmoji);
        const firstVisitText = toCurrency(crypto.currentValue);

        return this.cards(value, firstVisitEmoji, title, firstVisitText);
      }

      const changeValue = this.state.currency ? (currentValue - lastValue) : ((currentValue - lastValue) / lastValue) * 100;

      if (changeValue > 0) {
        emoji = getEmoji(positiveEmoji);
        text = this.state.currency ? toCurrency(changeValue) : toPercentage(changeValue);
      } else if (changeValue < 0) {
        emoji = getEmoji(negativeEmoji);
        text = this.state.currency ? `–${toCurrency(changeValue)}` : `–${toPercentage(changeValue)}`;
      } else {
        emoji = getEmoji(neutralEmoji);
        text = this.state.currency ? toCurrency(0) : '0%';
      }

      return this.cards(value, emoji, title, text);
    });
  }

  cards(value, emoji, title, text) {
    return (
      <div className="crypto__subcontainer" key={value}>
        <div className="crypto__content">
          <span className="crypto__emoji">{emoji}</span>
          <h2 className="crypto__title">{title}</h2>
          <span className="crypto__value">{text}</span>
        </div>
      </div>
    );
  }

  toggleCurrency() {
    this.setState(prevState => ({
      currency: !prevState.currency
    }));
  }

  render() {
    return (
      <section className={`crypto section-padding ${this.state.currency ? 'crypto--currency' : 'crypto--percentage'}`}>
        <div className="grid-xlarge">
          <div className="crypto__container">
            {this.marketChange()}
          </div>
          <div className="crypto__format">
            <span className={`crypto__button ${this.state.currency ? 'active' : ''}`} onClick={this.toggleCurrency}>
              <span>$</span>
            </span>
            <span className={`crypto__button ${!this.state.currency ? 'active' : ''}`} onClick={this.toggleCurrency}>
              <span>%</span>
            </span>
          </div>
        </div>
      </section>
    );
  }
}

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default Crypto;
