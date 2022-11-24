import "./Card.css"
import CardDetails from "./CardDetails"
import {useState} from 'react';

export default function Card(props){

    const [isShown, setIsShown] = useState(false);

    const handleClick = event =>{
        setIsShown(current => !current);
    };

    return(
        <div>
            <div className="card--info">
                <img className="card--img" src={props.image}></img>
                {isShown && (
                    <CardDetails name={props.name} price={props.price} quantity={props.quantity} sets={props.sets}/>
                )}
                
            </div>
            <button className="card--button" onClick={handleClick}>More Info</button>
        </div>
    )
}