import React,{useState,useEffect} from 'react'
import './style.css'
import Gamerules from './components/gamerules/Gamerules';
import Sacdeli from './components/gamerules/Sacdeli'
const App = () => {
    const [sigrdze, setsigrdze] = useState(0);
    const [sigane, setsigane] = useState(0);
    const [miyolebit, setmiyolebit] = useState(0);

    const [game, setgame] = useState([]);
    var temp = new Array(sigrdze*sigane);
    useEffect(() => {
        temp.fill('');
        setgame([...temp]);
    }, [sigrdze,sigane])
    
    return (
        <div>
            <Gamerules setsigane={setsigane} setsigrdze={setsigrdze} setmiyolebit={setmiyolebit} />
            <Sacdeli game={game} sigrdze={sigrdze} sigane={sigane} setgame={setgame} miyolebit={miyolebit}/>
        </div>
    )
}

export default App
