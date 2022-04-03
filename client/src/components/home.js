import React from 'react';
import './App.scss';
import bg from './background.png';
// import contactUs from './contact/contact';
import slog from './slog.png';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  // componentDidMount() {
  //   this.callApi()
  //     .then((res) => this.setState(res))
  //     .catch(console.error);
  // }

  // callApi = async () => {
  //   const resp = await fetch('/api');

  //   window._resp = resp;

  //   let text = await resp.text();

  //   let data = null;
  //   try {
  //     data = JSON.parse(text); // cannot call both .json and .text - await resp.json();
  //   } catch (e) {
  //     console.err(`Invalid json\n${e}`);
  //   }

  //   if (resp.status !== 200) {
  //     throw Error(data ? data.message : 'No data');
  //   }

  //   return data;
  // };

  render() {
    return (
      <div className="App">
        <header>
          <div className="mainHeader">
            <div class="logo">
              <a href="https://localhost:3000">
                <img src={slog} alt="Logo" />
              </a>
            </div>
            <nav className="hover">
              <a href="https://localhost:3000">Home</a>
              <a
                href="https://www.facebook.com/ahmad.shafique.7777"
                target="blank"
              >
                Counselling
              </a>
              <a href="https://github.com/ahmad0143" target="blank">
                Careers
              </a>
              <a href="/contact">Contact</a>
            </nav>
            <div className="menuBtn">
              <button>HelpLine</button>
            </div>
          </div>
          <main>
            <section className="left">
              <h2>I am here For You.</h2>
              <h1>Lets Find Out Your Interest.</h1>
              <p>I am here for you to help 24/7.</p>
              <button>Lets Begin</button>
            </section>

            <section className="right">
              <figure>
                <img src={bg} alt="Main " />
              </figure>
            </section>
          </main>
        </header>
      </div>
    );
  }
}

export default Home;
