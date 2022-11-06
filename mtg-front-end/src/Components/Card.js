import "./Card.css"


//The image source will be pulled from the api request
//Price and quantity will be pulled from the database
export default function Card(){
    return(
        <div>
            <div className="card--info">
                <img className="card--img" src="https://backs.scryfall.io/large/4/0/407ed11d-7b6f-4e1c-ab00-f49c25f170e3.jpg?1665006169"></img>
                    <div className="card--details">
                        <p className="card--title">Card Name</p>
                        <div className="card--sets">
                            <p className="set--header">Sets</p>    
                        </div>
                    </div>
                </div>
                <div className="card--price_quantity">
                <p>Price: Null</p>
                <p>Quantity: Null</p>    
            </div>
        </div>
    )
}