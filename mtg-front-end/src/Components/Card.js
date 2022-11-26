import "./Card.css"
import CardDetails from "./CardDetails"
import {useState} from 'react';
import foil from "../Images/foil_overlay.png"


export default function Card(props){
    const [isShown, setIsShown] = useState(false);
    const details = event =>{
        setIsShown(state => !state);
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
    const [index, setIndex] = useState(0);
   
    const clickSet = (i) =>  {
        // setIndex(props.version[])
        if(props.version.length > 1){
            console.log(props.version[i].frontImage)
            setIndex(i)
        }
    }

    let sets = []
    for(let i=0;i <props.version.length; i++){
        sets.push(<button onClick={() => {clickSet(i)}}>{props.version[i].set}</button>) 
    }
    return(
        <div>
            <div className="card--info">
            <div className='card--foil--container'>
                    {props.version[index].extra != 'NONE' && (
                        <img className='card--foil' src={foil}></img>
                    )}
                    <img
                        className='card--img'
                        src={side == "front" ? props.version[index].frontImage : props.version[index].backImage} ></img>
            </div>
            {isShown && (
                <div className='card--details'>
                    <h2>{props.version[index].name}</h2>
                    <div>{sets}</div>   
                {/* <CardDetails key={props.name} version={props.version}/> */}
                </div>
            )}
            <div className="card--buttons">
                <button className="card--button" onClick={details}>{isShown == true ? "Show less" : "Show More"}</button>
                {props.version[index].backImage != "" && <button className="card--flip" onClick={flip}>Flip Card</button>}
            </div>
            </div>
        </div>
    )
}