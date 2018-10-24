import React from 'react';
import FishForm from './FishForm'

class Inventory extends React.Component{
    render(){ 
       return(
     <div>
         <h1>Inventory</h1>
         <FishForm addFish={this.props.addFish}/>
          <button onClick={this.props.loadSamples}>Load Fishes</button>
     </div>
       )
        
    }
}
export default Inventory;