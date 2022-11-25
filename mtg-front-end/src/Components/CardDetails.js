
import "./CardDetails.css"

export default function CardDetails(props){
    console.log(props);
    let sets = "Sets:\n"
    for(let i=0;i <props.version.length; i++){
        if(i==0){
            sets = sets + props.version[i].set
        }
        else{
            sets = sets + ", " + props.version[i].set;
        }
    }
    return(
        <div className="card--details">
            <h4 className="card--title">{props.name}</h4>
            <div className="card--sets">                    
                <h4 className="set--header">{sets}</h4>
                <p className="set--name"></p>    
            </div>
            <div className="price_quantity">
                <span>price: {props.version[0].price}</span>
                <span>Quantity: {props.version[0].quantity}</span>
            </div>
        </div>
    )
}