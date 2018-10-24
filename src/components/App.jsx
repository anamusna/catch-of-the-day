import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sampleFishes';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fishes: {},
      orders: {},
    }
  }
  addFish = fish => {
    let fishes = { ...this.state.fishes }
    const time = Date.now();
    fishes[`Fresh-Fish-${time}`] = fish
    this.setState({ fishes })
  }
  loadSamples = () => {
this.setState({fishes: sampleFishes})
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    )

  }
}
export default App;