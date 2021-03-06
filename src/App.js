import React, { Component } from 'react';
import Layout from '../src/hoc/Layout/Layout'
import BurgerBuilder from '../src/containers/BurgerBuilder'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
