import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Components/Card';

const cardObj = {
  price: "",
  quantity: "",
  image: "",
  name: "",
  sets: [],
}

cardObj.price = "777";
cardObj.quantity = "10";
cardObj.image = "https://cards.scryfall.io/large/front/0/7/07531062-8a83-4716-8416-11565908143f.jpg?1562540223";
cardObj.name = "Mountain"
cardObj.set = ["DMU"];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <navbar className="nav">
        <ul>
          <li>Button 1</li>
          <li>Button 2</li>
          <li>Button 3</li>
        </ul>
      </navbar>
      <Card className="card1" price={cardObj.price}
            quantity={cardObj.quantity} 
            image={cardObj.image}
            name={cardObj.name}/>
      <Card className="card1" price={cardObj.price}
            quantity={cardObj.quantity} 
            image={cardObj.image}
            name={cardObj.name}/>
      <Card className="card1" price={cardObj.price}
            quantity={cardObj.quantity} 
            image={cardObj.image}
            name={cardObj.name}/>
      <Card className="card1" price={cardObj.price}
            quantity={cardObj.quantity} 
            image={cardObj.image}
            name={cardObj.name}/>
      <Card className="card1" price={cardObj.price}
            quantity={cardObj.quantity} 
            image={cardObj.image}
            name={cardObj.name}/>
    </div>       
  </React.StrictMode>,
);
