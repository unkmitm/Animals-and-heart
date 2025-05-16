import bird from "../images/bird";
import cat from "../images/cat";
import cow from "../images/cow";
import dog from "../images/dog";
import gator from "../images/gator";
import horse from "../images/horse";
import heart from "../images/heart";

const animalObj = {
    bird , 
    cat , 
    cow , 
    dog ,
    gator , 
    horse
};

function Animal ({type}) {
    return (
        <div>
            {type}
        </div>
    )
}

export default Animal;