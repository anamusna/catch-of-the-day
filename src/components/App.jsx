import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sampleFishes';
import base from '../base';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			fishes : {},
			order  : {}
		};
	}

	addFish = (fish) => {
		let fishes = { ...this.state.fishes };
		const time = Date.now();
		fishes[`fish-${time}`] = fish;
		this.setState({ fishes });
	};

	addOrder = (key) => {
		let order = { ...this.state.order };
		order[key] = order[key] + 1 || 1;
		this.setState({ order });
	};

	removeOrder = (key) => {
		let order = { ...this.state.order };
		delete order[key];
		this.setState({ order });
	};

	loadSamples = () => {
		this.setState({ fishes: sampleFishes });
	};
	componentWillMount() {
		this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
			context : this,
			state   : 'fishes'
		});
	}
	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header />
					<ul className="list-of-fishes">
						{Object.keys(this.state.fishes).map((id) => (
							<Fish key={id} i={id} item={this.state.fishes[id]} addOrder={this.addOrder} />
						))}
					</ul>
				</div>
				<Order fishes={this.state.fishes} order={this.state.order} removeOrder={this.removeOrder} />
				<Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
			</div>
		);
	}
}
export default App;
