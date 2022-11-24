
import "./CardDetails.css"

export default function CardDetails(props){
    return(
        <div className="card--details">
            <h4 className="card--title">{props.name}</h4>
            <div className="card--sets">                    
                <h4 className="set--header">Sets {props.sets}</h4>
                <p className="set--name"></p>    
            </div>
            <div className="price_quantity">
                <span>price: {props.price}</span>
                <span>Quantity: {props.quantity}</span>
            </div>
        </div>
    )
}