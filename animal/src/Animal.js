import { useState } from "react";
import bird from "../images/bird.svg";
import cat from "../images/cat.svg";
import cow from "../images/cow.svg";
import dog from "../images/dog.svg";
import gator from "../images/gator.svg";
import horse from "../images/horse.svg";
import heart from "../images/heart.svg";

const animalObj = {
    bird , 
    cat , 
    cow , 
    dog ,
    gator , 
    horse
};

function Animal ({type}) {
    const [size , addSize] = useState(1); 

    const clickHandler = () =>  {
        addSize(size+10);
    };

    return (
        <div onClick={clickHandler}>
            <img src = {animalObj[type]} alt="animals" />
            <img src = {heart} alt="heart" style={{
                width : size + "px"
            }}/>
        </div>
    );
};

export default Animal;