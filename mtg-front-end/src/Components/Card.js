import "./Card.css"
import CardDetails from "./CardDetails"

//The image source will be pulled from the api request
//Price and quantity will be pulled from the database
export default function Card(props){
    console.log(props.image)
    return(
        <div>
            <div className="card--info">
                <img className="card--img" src={props.image}></img>
                    <CardDetails name={props.name}/>
                </div>
                <div className="card--price_quantity">
                    <p>Price: {props.price}</p>
                    <p>Quantity: {props.quantity}</p>    
            </div>
        </div>
    )
}