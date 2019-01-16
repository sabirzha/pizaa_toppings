import React, { Component } from 'react';
import './App.css';
import Products from './Products.js'

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">Products Form</header>
        <section>
          <Products />
        </section>
      </div>
    );
  }
}

export default App;
