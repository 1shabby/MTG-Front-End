import './App.css';
import Card from './Card';
import Data from '../TestData';

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
                <li>Button 1</li>
                <li>Button 2</li>
                <li>Button 3</li>
                </ul>
            </nav>
        <section className="cards">
            {cards}
        </section>
        </div> 
      )

}
