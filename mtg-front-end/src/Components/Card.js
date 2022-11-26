import "./Card.css"
import {useState} from 'react';
import foil from "../Images/foil_overlay.png"
import {motion} from "framer-motion"

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

            return side
        })
    }
    const [index, setIndex] = useState(0);
   
    const clickSet = (i) =>  {
        if(props.version.length > 1){
            setIndex(i)
        }
    }

    let sets = []
    for(let i=0;i <props.version.length; i++){
        sets.push(<motion.button whileHover={{scale:1.1}} onClick={() => {clickSet(i)}}>{props.version[i].set}</motion.button>) 
    }
    return(
        <div>
            <motion.div className="card--info"
                animate={{scale:1}}
                initial={{scale:0}} 
                transition={{type: "tween", duration: .7}}
                drag
                whileHover={{scale:1.1}}>
                <div className='card--foil--container' >
                        {props.version[index].extra != 'NONE' && (
                            <img className='card--foil' src={foil}></img>
                        )}
                        <img
                            className='card--img'
                            src={side == "front" ? props.version[index].frontImage : props.version[index].backImage} ></img>
                </div>
                {isShown && (
                    <div className='card--details'>
                        <h3 className="card--name">{props.name}</h3>
                        <div className="card--price-quantity">
                            <p>Price: ${props.version[index].price}</p>
                            <p>Quantity: {props.version[index].quantity}</p>
                        
                        </div>
                        <div >{sets}</div> 
                    </div>
                )}
                <div className="card--buttons"
                animate={{scale:1}}
                initial={{scale:0}}
                transition={{type: "tween", duration: 1}}
                >
                    <button className="card--button" onClick={details}>{isShown == true ? "Show less" : "Show More"}</button>
                    {props.version[index].backImage != "" && <button className="card--flip" onClick={flip}>Flip Card</button>}
                </div>
            </motion.div>
        </div>
    )
}