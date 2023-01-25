import './App.css';
import Card from './Card';
import Data from '../TestData';
import logo from "../Images/Magic-The-Gathering-logo.png"

export default function App(){
    const cards = Data.map(card =>{
        return(
            <Card
                {...card}
            />
        )
    })
    

    return (
        <div>
            <nav className="nav">
                <ul>
                <li><img source={logo}></img></li>
                <li><button>Library</button></li>
                <li><button>Stats</button></li>
                <li><button>Add Cards</button></li>
                </ul>
            </nav>
            <section className="cards">
                {cards}
            </section>
        </div> 
      )

}
