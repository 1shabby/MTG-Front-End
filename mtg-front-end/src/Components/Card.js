import "./Card.css"
import CardDetails from "./CardDetails"

export default function Card(props){
    const [isShown, setIsShown] = useState(false);

    const handleClick = event =>{
        setIsShown
    }

    return(
        <div>
            <div className="card--info">
                <img className="card--img" src={props.image}></img>
                <CardDetails name={props.name} price={props.price} quantity={props.quantity}/>
            </div>
            <button className="card--button">More Info</button>
        </div>
    )
}