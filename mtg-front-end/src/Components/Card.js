import "./Card.css"
import CardDetails from "./CardDetails"
import {useState} from 'react';
import foil from "../Images/foil_overlay.png"

export default function Card(props){
    const [isShown, setIsShown] = useState(false);

    const handleClick = event =>{
        setIsShown(current => !current);
    };

    return(
        <div>
            <div className="card--info">
                {props.version[0].extra != "NONE" && <img className="card--img" src={foil}></img>}
                <img className="card--foil" src={props.version[0].frontImage}></img>
                {isShown && (
                    <CardDetails name={props.name} version={props.version}/>
                )}
                <button className="card--button" onClick={handleClick}>More Info</button>
            </div>
        </div>
    )
}