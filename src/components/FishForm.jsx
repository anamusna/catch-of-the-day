import React from 'react';

class FishForm extends React.Component {
  createFish = event => {
    event.preventDefault();
    const fish = {
      name: this.name.value,
      price: this.price.value,
      availability: this.availability.value,
      description: this.description.value,
      image: this.image.value,
    }
    this.props.addFish(fish);
    this.SeaFoodForm.reset();
  }

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish} ref={(form) => this.SeaFoodForm = form}>
        <input type="text" placeholder="Fish Name"
        ref={(input) => this.name = input} />
        <input type="text" placeholder="Fish Price"
        ref={(input) => this.price = input} />
        <select ref={(select) => this.availability = select}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea type="text" placeholder="Fish Description"
        ref={(textarea) => this.description = textarea}></textarea>
        <input type="text" placeholder="Fish Image"
        ref={(input) => this.image = input} />
        <button type="submit">+ Add Item</button>
      </form>
    )
  }
}

export default FishForm;