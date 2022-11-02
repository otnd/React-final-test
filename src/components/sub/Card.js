import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const navigate = useNavigate();

    return <div onClick={() => navigate('/MealDetails', {
        state: { id: props.meal.idMeal }
    })}>
        <img src={props.meal.strMealThumb} />
        <div>
            <h1>{props.meal.strMeal}</h1>
        </div>
    </div>
}

export default Card;