
import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

  goToStore = event => {
    event.preventDefault();
    console.log(this.textInput.value);
    this.context.router.transitionTo(`store/${this.textInput.value}`)
  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h1>Please Enter a Store</h1>
        <input type="text" defaultValue={getFunName()} ref={(input) => this.textInput = input} />
        <button type="submit">Visit Store →</button>
      </form>

    )

  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}
export default StorePicker;
