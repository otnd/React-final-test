import React, { useState } from "react";
import axios from "axios";
import Card from "./sub/Card";

function Home() {
    const [meals, setMeals] = useState([]);
    const [height, setHeight] = useState("100vh")
    const [search, setSearch] = useState("");

    const searchInput = async () => {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        setMeals([...res.data.meals])
        setHeight("100%")
    }

    console.log(meals)
    return (
        <div style={{ height: height }}>
            <input type="text" placeholder='Search Meals' value={search} onChange={(e) => setSearch(e.currentTarget.value)} />
            <button onClick={searchInput}>Search</button>
            {meals.map(meal => <Card meal={meal} />)}
        </div>
    );
}

export default Home;