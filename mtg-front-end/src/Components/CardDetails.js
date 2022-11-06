
import "./CardDetails.css"

export default function CardDetails(props){
    return(
        <div className="card--details">
            <h4 className="card--title">{props.name}</h4>
            <div className="card--sets">                    
                <h4 className="set--header">Sets</h4>
                <p className="set--name"></p>    
            </div>
        </div>
    )
}