import React, {useState, useEffect} from 'react';
import axios from "axios";

const MealDetails = () => {
    const [meals, setMeals] = useState(null);

    const retrieveMeal = async (id) => {
        const result = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        setMeals([...result.data.meals])
    }

    useEffect(() => {
        retrieveMeal(window.history.state.usr.id);
    }, [])

    return <div style={{height: "100vh"}}>
        {meals && <div>
            <img src={meals[0].strMealThumb} />
            <div>
                <h1>{meals[0].strMeal}</h1>
                <h2>Origin:</h2>
                <p>{meals[0].strArea}</p>
                <h2>Category:</h2>
                <p>{meals[0].strCategory}</p>
                <h2>Instructions:</h2>
                <p>{meals[0].strInstructions}</p>
            </div>
        </div>}

    </div>
}

export default MealDetails;