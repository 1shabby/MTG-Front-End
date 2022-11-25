import "./Card.css"
import CardDetails from "./CardDetails"
import {useState} from 'react';
import foil from "../Images/foil_overlay.png"


export default function Card(props){
    const [isShown, setIsShown] = useState(false);
    const details = event =>{
        setIsShown(current => !current);
    };
     
    var [side,setSide] = useState(["front",props.version[0].frontImage]);

    const flip = event =>{
        // console.log("state " + side[0])
        // console.log("Img " + side[1])
        setSide(function(side){
            if(side[0] == "front"){
                side[0] = "back";
                side[1] = props.version[0].backImage
            }
            else if(side[0] == "back"){
                side[0] = "front";
                side[1] = props.version[0].frontImage
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
                        src={side[1]}></img>
            </div>
            {isShown && (
                <CardDetails name={side[0]} version={props.version}/>
            )}
            <div className="card--buttons">
                <button className="card--button" onClick={details}>Details</button>
                {props.version[0].backImage != "" && <button className="card--flip" onClick={flip}>Flip Card</button>}
            </div>
            </div>
        </div>
    )
}