import "./Card.css"

export default function Card(){
    return(
        <div>
            <img className="card--img" src="https://cards.scryfall.io/large/front/1/7/17d6703c-ad79-457b-a1b5-c2284e363085.jpg?1592673422"></img>
            <div className="card--details">
                <p>Price:</p>
                <p>Quantity:</p>    
            </div>
        </div>
    )
}