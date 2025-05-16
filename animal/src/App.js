import Animal from "./Animal";
import { useState } from "react";

function randomAnimalGenerator () { 
    const animals = ['cat' , 'dog' , 'cow' , 'bird' , 'gator' , 'horse'];
    const randoms = Math.floor(Math.random() * animals.length);
    
    return animals[randoms];
};

function App () {

    const [animal , animalAdd] = useState([]);

    const clickHandler = () => {
        return animalAdd([...animal , randomAnimalGenerator()])
    };

    const animalLists = animal.map((animals , index)=>{
        return <Animal type={animals} key={index}/>
    });

    return (  
    <div>
        <button onClick={clickHandler}>Add Animal</button>
        <div>{animalLists}</div>
    </div>

    )
}

export default App;