import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { Runtime, Inspector } from '@observablehq/runtime';
import notebook from '@corpetty/status-sticker-market-blog-embed';
// import Latex from 'react-latex';
import style from './App.css';

class App extends Component {
  componentDidMount() {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === 'viewof numberStatusUsers') {
        return new Inspector(this.numberUserInputRef.current);
      }
      if (name === 'viewof userGrowthRate') {
        return new Inspector(this.userGrowthRateRef.current);
      }
      if (name === 'viewof userChurnRate') {
        return new Inspector(this.userChurnRateRef.current);
      }
      if (name === 'viewof userbar') {
        return new Inspector(this.userbarRef.current);
      }
      if (name === 'viewof discountRate') {
        return new Inspector(this.discountRateRef.current);
      }
      if (name === 'viewof percentUserBuysPack') {
        return new Inspector(this.percentUserBuysPackRef.current);
      }
      if (name === 'viewof userBuyPerYear') {
        return new Inspector(this.userBuyPerYearRef.current);
      }
      if (name === 'viewof dollarPriceStickers') {
        return new Inspector(this.dollarPriceStickersRef.current);
      }
      return null;
    });
  }

  numberUserInputRef = React.createRef();

  userGrowthRateRef = React.createRef();

  userChurnRateRef = React.createRef();

  userbarRef = React.createRef();

  discountRateRef = React.createRef();

  percentUsersBuysPackRef = React.createRef();

  userBuyPerYearRef = React.createRef();

  dollarPriceStickersRef = React.createRef();

  render() {
    return (
      <div className="App">
        <h2>Introduction</h2>
        <p />
        <p>
          Let’s start by breaking down how the Sticker Market work within
          Status:
          <ol>
            <li>Artist posts a Sticker pack for sale</li>
            <li>Artist sets price of sticker pack</li>
            <li>User purchases Sticker pack for use</li>
            <li>User uses Stickers in Sticker pack in chat</li>
          </ol>
        </p>
        <h2>Discussion of variables</h2>
        <h3>Number of Users</h3>
        <p>
          Here we will reuse a lot of the user estimations from the previous
          blog post on{` `}
          <a href="https://our.status.im/token-economics-ens-usernames/">
            ENS usernames
          </a>
          .
        </p>
        <div ref={this.numberUserInputRef} />
        <div ref={this.userGrowthRateRef} />
        <div ref={this.userChurnRateRef} />
        <div ref={this.userbarRef} className={style.chart} />
        <h3>Conversion rate of users to ENS username</h3>

        <h2>Example Scenario Analysis</h2>
        <p />
        <h2>Thoughts and Conclusions</h2>
        <p />
        <h3>Call to Action</h3>
        <p />
        <h3>Future Improvements and Articles</h3>
        <ul>
          <li>probability of failure</li>
          <li>justifications using historical data</li>
          <li>assign variables and create equations for each</li>
          <li>variable sticker prices and popularity</li>
          <li>market fees</li>
        </ul>
      </div>
    );
  }
}

export default hot(App);
