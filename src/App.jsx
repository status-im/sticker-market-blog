import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { Runtime, Inspector } from '@observablehq/runtime';
import notebook from '@corpetty/status-sticker-market-blog-embed';
import Latex from 'react-latex';

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
        return new Inspector(this.userBarRef.current);
      }
      if (name === 'viewof discountRate') {
        return new Inspector(this.discountRateRef.current);
      }
      if (name === 'viewof percentUsersBuyPack') {
        return new Inspector(this.percentUsersBuyPackRef.current);
      }
      if (name === 'viewof userBuyPerYear') {
        return new Inspector(this.userBuyPerYearRef.current);
      }
      if (name === 'viewof dollarPriceStickers') {
        return new Inspector(this.dollarPriceStickersRef.current);
      }
      if (name === 'viewof valuebar') {
        return new Inspector(this.valuebarRef.current);
      }
      if (name === 'viewof burnRate') {
        return new Inspector(this.burnRateRef.current);
      }
      if (name === 'viewof velocity') {
        return new Inspector(this.tokenVelocityRef.current);
      }
      if (name === 'viewof valueSplitBar') {
        return new Inspector(this.valueSplitBarRef.current);
      }
      if (name === 'viewof terminalGrowthRate') {
        return new Inspector(this.terminalGrowthRateRef.current);
      }
      if (name === 'viewof netPresentUtility') {
        return new Inspector(this.netPresentUtilityRef.current);
      }
      return null;
    });
  }

  numberUserInputRef = React.createRef();

  userGrowthRateRef = React.createRef();

  userChurnRateRef = React.createRef();

  userBarRef = React.createRef();

  discountRateRef = React.createRef();

  percentUsersBuyPackRef = React.createRef();

  userBuyPerYearRef = React.createRef();

  dollarPriceStickersRef = React.createRef();

  valuebarRef = React.createRef();

  burnRateRef = React.createRef();

  tokenVelocityRef = React.createRef();

  valueSplitBarRef = React.createRef();

  terminalGrowthRateRef = React.createRef();

  netPresentUtilityRef = React.createRef();

  render() {
    return (
      <div className="App">
        <h2>Introduction</h2>
        <p>
          Two weeks ago, we introduced our Token Economic Research initiative
          and published an analysis of the crypto economic model behind ENS
          Registration. This episode in the series will break down the
          tokenomics of the Sticker Market and how SNT is used within it. We
          invite anyone to critique the model, ask questions, and join in on our
          discussion{' '}
          <a href="https://discuss.status.im/t/token-economics-sticker-market/1260">
            here
          </a>
          . Stickers are fun, visual, and shown to increase engagement levels,
          particularly amongst millennials. The messaging app Line for instance
          derives about a quarter of its yearly revenues from sticker sales, or
          about $268m USD (Line Corporation IPO Filing).
        </p>
        <p>
          While ENS registration leverages a registry contract in which SNT is
          locked up for a given period of time, Sticker Market operates quite
          differently – it is much more transactional and includes both capital
          and commodity cases - displaying the versatility of the status network
          token.
        </p>

        <p>
          The Sticker Market is a place where artists will be able to create and
          sell sticker packs in the Status application for profit. The process
          is quite simple:
        </p>
        <ul>
          <li>Artist posts a sticker pack for sale</li>
          <li>Artist sets price of sticker pack</li>
          <li>User purchases sticker pack for use</li>
          <li>User uses stickers in sticker pack in chat</li>
        </ul>
        <p>
          In version one, we are only offering a set amount of precommissioned
          sticker packs for purchase, and all proceeds will go to the contracted
          artists&apos; wallet addresses. Version two will open up the market
          for anyone to be a creator and receive funds directly and there will
          be a (yet to be decided on) network fee on every purchase to go to the
          multisignature wallet controlling the contract. Right now, our plans
          are to have the network fee be zero, but we will include it in this
          model as the contract supports it, and it potentially adds interesting
          value dynamics.
        </p>
        <p>
          A break down of the feature, goals, specifications, and initial user
          stories can be found in this progress report from{' '}
          <a href="https://our.status.im/swarm-progress-report-sticker-market-february-8th-2019/">
            February 2019
          </a>
          . The feature is currently undergoing a third party security audit and
          will be available on main net soon after.
        </p>

        <p>
          <strong>
            DISCLAIMER: The work in this article (and mentioned notebooks) is
            for modeling purposes only. The numbers herein are not to project
            actual values locked up in Status and should not be used for
            investment advice. It is our strict desire to create and improve
            models that describe value flow of SNT use-cases (and similar token
            use-cases), and how these use-cases compare to each other.
          </strong>
        </p>
        <h2>Discussion of Variables</h2>
        <h3>Bringing in previous work</h3>
        <p>
          Considering this use case also depends on the userbase of Status,
          let&apos;s bring in the same variables from the{' '}
          <a href="https://our.status.im/token-economics-ens-usernames/">
            ENS Username article
          </a>
          . If you don&apos;t understand what these are or where they come from,
          we would recommend you go back and read the relevant parts of the ENS
          username article:
        </p>
        <div ref={this.numberUserInputRef} />
        <div ref={this.userGrowthRateRef} />
        <div ref={this.userChurnRateRef} />
        <div ref={this.userBarRef} />
        <div ref={this.discountRateRef} />
        <h3>Sticker Market specific variables</h3>
        <p>
          So now we have our projected userbase and discount rate. Breaking
          apart the way sticker market works above, we can see we&apos;ll need
          to know the average percentage of people who purchase stickers among
          those that user Status, the average number of packs that they purchase
          per year, and the average dollar cost per pack. Let&apos;s add those
          now.
        </p>

        <div ref={this.percentUsersBuyPackRef} />
        <div ref={this.userBuyPerYearRef} />
        <div ref={this.dollarPriceStickersRef} />

        <p>
          Now that we have these variables, we can plot how much value flows
          into the contract:
        </p>
        <div ref={this.valuebarRef} />

        <p>
          Cool. We now have how many (potential) dollars flow into the contract.
          Now we have to evaluate those future potential dollars in
          today&aopos;s value. What we have not included is how this money get
          broken up within the contract. There are two different avenues money
          in the contract can take:
        </p>
        <ol>
          <li>
            It can flow directly to the address the artist sets for payments
          </li>
          <li>or it can be &quot;burned&quot; as a fee.</li>
        </ol>
        <p>
          This is two very different evaluation mechanisms that should be
          treated separately. Let&apos;s now define the &quot;Burn rate,&quot;
          which is the percentage of every transaction that goes to the network
          (currently set to 0 for version 1):
        </p>
        <div ref={this.burnRateRef} />
        <p>
          In the ENS Username article, we introduce the concept of the discount
          rate and Net Present Value (NPV). We&apos;re going to reuse the
          discount rate, but change up how we calculate the NPV for part of this
          calculation.
        </p>

        <p>
          Why? In ENS Usernames, the user is locking away value for a period of
          time. This only works for the burned fees of Sticker Market so
          we&apos;ll apply the same analysis there. For the other funds, the
          value flows from buyer to seller and is not necessarily locked up. We
          will need to introduce a new way to calculate the value associated
          with these funds.
        </p>

        <p>
          This type of value flow is typically modeled by something called the
          Equation of Exchange, and you&apos;ll see it everywhere. We will not
          go deep into why this is used or its origins. For a good primer, we
          recommend Chris Burniske&apos;s{' '}
          <a href="https://medium.com/@cburniske/cryptoasset-valuations-ac83479ffca7">
            article
          </a>
          . In short, it is an equation in finance used to &quot;understand the
          flow of money needed to support an economy.&quot; It is given by the
          following, which we&apos;ll break down piece by piece:
        </p>
        <Latex>$$MV = PQ$$</Latex>
        <p>where </p>
        <table>
          <thead>
            <tr>
              <th>variable</th>
              <th>theory</th>
              <th>sticker market</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Latex>$$M$$</Latex>
              </td>
              <td>size of asset base</td>
              <td>dollar price of sticker market</td>
            </tr>
            <tr>
              <td>
                <Latex>$$V$$</Latex>
              </td>
              <td>velocity</td>
              <td>number of times SNT is used</td>
            </tr>
            <tr>
              <td>
                <Latex>$$P$$</Latex>
              </td>
              <td>average price of digital resource</td>
              <td>ave. price of sticker pack</td>
            </tr>
            <tr>
              <td>
                <Latex>$$Q$$</Latex>
              </td>
              <td>quantity of digital resource</td>
              <td>quantity of available sticker packs purchased</td>
            </tr>
          </tbody>
        </table>
        <p>
          Let&apos;s break down what each of those things mean in the context of
          the Sticker Market.
        </p>
        <p>
          Here, <Latex>$$Q$$</Latex> is the amount of sticker packs being
          purchased, <Latex>$$P$$</Latex> stands for the dollar cost per sticker
          pack. People often misuse this and assume it is the cost of the
          underlying asset, which is wrong. The &quot;good&quot; is the sticker
          pack. <Latex>M</Latex> is the dollar amount of the sticker packs being
          purchased, which is ultimately what we are going to be solving for to
          find NPV.
        </p>
        <p>
          You will notice we saved <Latex>$$V$$</Latex> for last. It is often
          the most confusing to comprehend, and muddy in terms of its derivation
          in cryptocurrencies. According to Burniske&apos;s analysis (which we
          follow here), this is best described as &quot;show[ing] the number of
          times an asset changes hands in a given period of time.&quot; His
          example gives the following example with Bitcoin. Imagine bitcoin had
          one use case, internal money transfers, replacing something like
          western union. That amount is ~$325 Billion per year. The typical
          transaction involves someone buying bitcoin then sending overseas then
          the other person converting to their local currency or goods. This
          causes bitcoin to turn over about 6.5 times per year. So what that
          means is the market cap that bitcoin needs to support money transfers
          of $325B a year is $50 Billion (325 / 6.5). For us (only looking at
          Sticker Market impact), the velocity is how often someone uses SNT to
          buy a sticker pack per year. We can assume that this turnover is once
          per month (subject to futher analysis) which comes to 12 times a year.
          Below you can mess with this knob to adjust to your liking.
        </p>
        <div ref={this.tokenVelocityRef} />
        <p>
          Now that we have all the variables defined for the equation of
          exchange defined, we can apply our valuations to the two different
          groups and see how they compare (note we used the same way to evaluate
          the burned tokens as ENS usernames). Below is a graph of the
          discounted amounts (side-by-side) over 10 years.
        </p>
        <div ref={this.valueSplitBarRef} />
        <p>
          The above chart sums up what the NPV would be over the next 10 years
          based on the chosen variable inputs. In other words, how much value
          does this use case have now as a function of the next 10 years, based
          on the equation of exchange? But blockchains potentially live on
          forever, and 10 years doesn&apos;t cut it for modeling. Current models
          account for this calculating the remaining years to infinity based on
          a continual growth rate, call the Terminal growth rate. Based on this
          rate, a terminal value (TV) is calculated to tack the value in the
          network for the rest of time. HashCIB wrote a{' '}
          <a href="https://medium.com/@HASHCIB/the-next-step-in-cryptoasset-valuation-34bade0386de">
            wonderful article
          </a>{' '}
          that goes more into detail on this model, we suggest you read it if
          you have not. Go ahead and play with the knob below to adjust the
          terminal groth rate.
        </p>
        <div ref={this.terminalGrowthRateRef} />
        <p>The discounted TV is then calculated by the following:</p>
        <Latex displayMode>
          {
            '$$TV_{\\text{disc}} = R_{t=10} \\frac{(1+g)}{(i-g)} \\frac{1}{(1+i)^{10}}$$'
          }
        </Latex>
        <p>where</p>
        <table>
          <thead>
            <tr>
              <th>variable</th>
              <th>theory</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Latex>{'$$TV_{\\text{disc}}$$'}</Latex>
              </td>
              <td>discounted terminal value</td>
            </tr>
            <tr>
              <td>
                <Latex>{'$$R_{t=10}$$'}</Latex>
              </td>
              <td>net income in year 10 of Sticker Market</td>
            </tr>
            <tr>
              <td>
                <Latex>$$i$$</Latex>
              </td>
              <td>discount rate</td>
            </tr>
            <tr>
              <td>
                <Latex>$$g$$</Latex>
              </td>
              <td>terminal growth rate</td>
            </tr>
          </tbody>
        </table>
        <p>
          Breaking that formula down, we take the last estimation year&apos;s
          net income (<Latex>{'$$R_{t=10}$$'}</Latex>), increase it by the
          terminal growth rate (<Latex>$$1+g$$</Latex>), project into the
          infinite future by dividing by the difference in rates (
          <Latex>$$i-g$$</Latex>), and then finally discount the whole thing at
          the given discount rate at the final estimation year. From here, we
          can add the discounted 10 year estimation and the discounted TV
          together to give the NPV of the Sticker Market over all time.
        </p>
        <div ref={this.netPresentUtilityRef} />
        <h2>Example Scenario Analysis</h2>

        <p>
          Alright, we&apos;ve finally arrived at a number that gives the
          relative value of the Sticker Market. Let&apos;s do the same thing we
          did in ENS Usernames and change some values to see how the model
          reacts.
        </p>

        <p>
          As an example, let&apos;s look at what happens to the NPV as the burn
          rate, or the amount the network takes from every transaction, changes.
          We&apos;ll keep things relatively simplistic and not track too many
          things here. Below is a table that shows how NPV changes as a function
          of burn rate:
        </p>
        <table>
          <thead>
            <tr>
              <th>burn rate</th>
              <th>NPV</th>
              <th>% change from 1%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>$3,987,039.00</td>
              <td>-13.9</td>
            </tr>
            <tr>
              <td>1</td>
              <td>$4,630,464.00</td>
              <td>000.0</td>
            </tr>
            <tr>
              <td>2</td>
              <td>$5,273,889.00</td>
              <td>013.9</td>
            </tr>
            <tr>
              <td>5</td>
              <td>$7,204,163.00</td>
              <td>055.6</td>
            </tr>
            <tr>
              <td>10</td>
              <td>$10,421,288.00</td>
              <td>125.0</td>
            </tr>
            <tr>
              <td>25</td>
              <td>$20,072,662.00</td>
              <td>333.0</td>
            </tr>
            <tr>
              <td>50</td>
              <td>$36,158,286.00</td>
              <td>681.9</td>
            </tr>
          </tbody>
        </table>
        <p>
          Currently V1 has the burn rate set to 0%, meaning all value goes to
          the artists, and nothing gets burned. We can clearly see that as we
          increase the burn rate of the Market, we continuously increase the
          NPV. Now this does not mean we should just hike it up, because what is
          not being taken into account is the value artists are directly
          receiving by selling packs as well as the other impact this use-case
          may have on user growth and other use-cases.
        </p>
        <h2>Thoughts and Conclusions</h2>

        <p>
          This article has laid out how the Sticker Market works and its
          potential impact on the SNT ecosystem. Because Sticker Market has
          different value flow, we got to introduce the concepts like the
          equation of exchange and terminal value to model evaluation. There is
          much to do to make this better, but wanted something relatively simple
          to bring the concepts forward and how they apply to SNT use-cases,
          which is something that the authors have not seen before. Stay tuned
          for more SNT use-case analysis and modeling techniques, and please
          give your feedback on where we can improve!
        </p>
        <h3>Call to Action</h3>

        <p>
          Our goal is to continuously improve these methods and create more work
          not only around Sticker Market, but with the entire SNT ecosystem.
          This means we would love to get feedback from you, the community. If
          we have done something incorrectly, or you know of some way to better
          model various aspects herein, please join the discussion. We will be
          posting all of these articles in our discuss and linking around the
          internet in relevant places. We will also gladly give attribution to
          those that add to the models we use.
        </p>

        <p>
          If you are interested in the models created here and want to see more
          detail, please see the more detailed notebooks on ObservableHQ. There,
          you can play, edit, and fork the notebooks for your own use cases. We
          would love to hear your feedback!
        </p>
        <ul>
          <li>
            <a href="https://discuss.status.im/t/token-economics-sticker-market/1260">
              Discussion Forum posting
            </a>
          </li>
          <li>
            <a href="https://observablehq.com/@bgits/status-sticker-market-utility-value-exploration?collection=@bgits/status">
              Detailed Sticker Market Token Model Workbook
            </a>
          </li>
          <li>
            <a href="https://observablehq.com/@bgits/status-cost-of-capital?collection=@bgits/status">
              Status Cost of Capital Model Workbook
            </a>
          </li>
          <li>
            Join the conversation in Status at{' '}
            <a href="https://get.status.im/chat/public/token-economics">
              #token-economics
            </a>
          </li>
          <li>
            Learn more about SNT and the various use cases{' '}
            <a href="https://status.im/snt-utility/">here</a>
          </li>
        </ul>

        <h3>Future Improvements and Articles</h3>
        <ul>
          <li>probability of failure</li>
          <li>justifications using historical data</li>
          <li>assign variables and create equations for each</li>
          <li>variable sticker prices and popularity</li>
          <li>market fees</li>
          <li>stronger analysis of SNT &quot;velocity&quot;</li>
        </ul>
      </div>
    );
  }
}

export default hot(App);
