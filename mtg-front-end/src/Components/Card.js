import "./Card.css"
import CardDetails from "./CardDetails"
import {useState} from 'react';
import foil from "../Images/foil_overlay.png"


export default function Card(props){
    const [isShown, setIsShown] = useState(false);
    const details = event =>{
        setIsShown(state => !state);
        console.log(state)
    };
     
    var [side,setSide] = useState("front");

    const flip = event =>{
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
                <div className='card--details'>
                    <h2>{props.version[0].name}</h2>
                
                {/* <CardDetails key={props.name} version={props.version}/> */}
                </div>
            )}
            <div className="card--buttons">
                <button className="card--button" onClick={details}>{isShown == true ? "Show less" : "Show More"}</button>
                {props.version[0].backImage != "" && <button className="card--flip" onClick={flip}>Flip Card</button>}
            </div>
            </div>
        </div>
    )
}