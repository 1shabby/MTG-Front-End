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
                <img className="card--img" src={props.version[0].image}></img>
                {isShown && (
                    <CardDetails name={props.name} version={props.version}/>
                )}
                
            </div>
            <button className="card--button" onClick={handleClick}>More Info</button>
        </div>
    )
}