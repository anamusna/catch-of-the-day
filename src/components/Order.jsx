import React from 'react';
import { formatPrice } from '../helpers';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Order extends React.Component {
	renderOrder = (key) => {
		const fish = this.props.fishes[key];
		const count = this.props.order[key];
		const deleteButton = <button onClick={() => this.props.removeOrder(key)}>X</button>;

		return (
			<li key={key}>
				<span>
					<CSSTransitionGroup
						component="span"
						className="count"
						transitionName="count"
						transitionEnterTimeout={2000}
						transitionLeaveTimeout={2000}>
						<span>{count}</span>
					</CSSTransitionGroup>
					kg {fish.name} {deleteButton}
				</span>
				<span className="price">{formatPrice(count * fish.price)}</span>
			</li>
		);
	};
	render() {
		const orderId = Object.keys(this.props.order);
		const sum = orderId.reduce((previousValue, key) => {
			const fish = this.props.fishes[key];
			const count = this.props.order[key];
			const isAvailable = fish && fish.status === 'available';

			if (isAvailable) {
				return previousValue + count * fish.price;
			} else {
				return previousValue;
			}
		}, 0);
		return (
			<div className="order-wrap">
				<h1>My Orders</h1>
				<CSSTransitionGroup
					component="ul"
					className="order"
					transitionName="order"
					transitionEnterTimeout={2000}
					transitionLeaveTimeout={500}>
					{orderId.map(this.renderOrder)}
					<li className="total">{formatPrice(sum)}</li>
				</CSSTransitionGroup>
			</div>
		);
	}
}
export default Order;
