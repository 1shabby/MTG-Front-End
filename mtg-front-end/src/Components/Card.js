import "./Card.css"
import CardDetails from "./CardDetails"
import {useState} from 'react';
import foil from "../Images/foil_overlay.png"

export default function Card(props){
    const [isShown, setIsShown] = useState(false);

    // const [front, setFlipped] = useState(true);

    const details = event =>{
        setIsShown(current => !current);
    };
    // var image
    // const flip = event =>{
    //     setFlipped(image => {
    //         if(front){
    //             image = props.version[0].frontImage
    //         }
    //         else{
    //             image = props.version[0].backImage
    //         }
    //         front = !front;
    //     });
    // }

    return(
        <div>
            <div className="card--info">
            <div className='card--foil--container'>
                    {props.version[0].extra != 'NONE' && (
                        <img className='card--foil' src={foil}></img>
                    )}
                    <img
                        className='card--img'
                        src={props.version[0].frontImage}></img>
            </div>
            {isShown && (
                <CardDetails name={props.name} version={props.version}/>
            )}
            <div className="card--buttons">
                <button className="card--button" onClick={details}>Details</button>
                {props.version[0].backImage != "" && <button className="card--flip">Flip Card</button>}
            </div>
            </div>
        </div>
    )
}