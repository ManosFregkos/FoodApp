import React from 'react';

const RecipeDetails = ({ingredients}) => {
    
    return ingredients.map((ingredient,i) => {
        return(
            <ul key={i} className="ingredient-list">
                <li className="ingredient-text">{ingredient.text}</li>
                <li className="ingredient-weight">Weight-{Math.round(ingredient.weight)}grams</li>
            </ul>
        )
    })
}
export default RecipeDetails;
