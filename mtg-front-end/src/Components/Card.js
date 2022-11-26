import "./Card.css"
import CardDetails from "./CardDetails"
import {useState} from 'react';
import foil from "../Images/foil_overlay.png"


export default function Card(props){
    const [isShown, setIsShown] = useState(false);
    const details = event =>{
        setIsShown(current => !current);
    };
     
    var [side,setSide] = useState("front");

    const flip = event =>{
        // console.log("state " + side[0])
        // console.log("Img " + side[1])
        setSide(function(side){
            if(side == "front"){
                side = "back";  
            }
            else if(side == "back"){
                side = "front";
            }
            console.log(side)
            return side
        })
        
    }
    return(
        <div>
            <div className="card--info">
            <div className='card--foil--container'>
                    {props.version[0].extra != 'NONE' && (
                        <img className='card--foil' src={foil}></img>
                    )}
                    <img
                        className='card--img'
                        src={side == "front" ? props.version[0].frontImage : props.version[0].backImage} ></img>
            </div>
            {isShown && (
                <CardDetails key={props.name} version={props.version}/>
            )}
            <div className="card--buttons">
                <button className="card--button" onClick={details}>Details</button>
                {props.version[0].backImage != "" && <button className="card--flip" onClick={flip}>Flip Card</button>}
            </div>
            </div>
        </div>
    )
}