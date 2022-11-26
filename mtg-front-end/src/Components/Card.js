import "./Card.css"
import {useState} from 'react';
import foil from "../Images/foil_overlay.png"
import {motion} from "framer-motion"
import { GrUpdate } from 'react-icons/gr';

export default function Card(props){
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

    const [hover,setHover] = useState(false);
    const handleMouseEnter = () => {
        setHover(true);
    }
    const handleMouseLeave = () => {
        setHover(false);
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
                <div className='card--foil--container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                        {props.version[index].extra != 'NONE' && (<img className='card--foil' src={foil}></img>)}
                        {props.version[index].backImage != "" && <motion.button className="card--flip" onClick={flip} initial= {{rotate: 0,}} whileHover={{rotate:160}}><GrUpdate/></motion.button>}
                        {hover && (
                            <div className='card--details'>
                            <h3 className="card--name">{props.name}</h3>
                            <div className="card--price-quantity">
                                <p>Price: ${props.version[index].price}</p>
                                <p>Quantity: {props.version[index].quantity}</p>
                            </div>
                            <div >{sets}</div> 
                        </div>
                )}
                        <img className='card--img'src={side == "front" ? props.version[index].frontImage : props.version[index].backImage} ></img>      
                </div>
            </motion.div>
        </div>
    )
}