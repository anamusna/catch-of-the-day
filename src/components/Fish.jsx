import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
	render() {
		const { item } = this.props;
		const isAvailable = item.status === 'available';
		const buttonAvailable = isAvailable ? 'Add To Order' : 'Sold Out';
		return (
			<li className="menu-fish">
				<img src={item.image} alt={item.name} />
				<h3 className="fish-name">
					{item.name}
					<span className="price">{formatPrice(item.price)}</span>
				</h3>
				<p>{item.desc}</p>
				<button onClick={() => this.props.addOrder(this.props.i)} disabled={!isAvailable}>
					{buttonAvailable}
				</button>
			</li>
		);
	}
}

export default Fish;
