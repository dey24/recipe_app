import React from 'react';

const Recipe = ({title, calories, image}) => {
    return(
        <div>
            <h1>{title}</h1>
            <h3>{calories}</h3>
            <img src ={image} alt = "" />
        </div>
    )
}

export default Recipe;