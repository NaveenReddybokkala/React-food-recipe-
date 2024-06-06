import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MealItem from "./MealItem";

const Meal = () => {
    const [search,setSearch]=useState();
    const [show,setShow]=useState(false);
    const [item,setItem]=useState("");
    const [url,setUrl]=useState("https://www.themealdb.com/api/json/v1/1/search.php?s=");

    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=> {
            setItem(data.meals);
            setShow(true);
        })
     },[url])

     const searchRecipe=(evt)=>{
         setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }
   
return (
    <>
        <div className="main">
            <div className="heading">
                <h3>Tasty Tales with <span>Naveen</span> </h3>
                
            </div>

            <div className="searchBox">
                <input type="search" placeholder="search here for recipes.........." className="search-bar" onChange={e=> setSearch(e.target.value)} onKeyPress={searchRecipe}/>
                <div className="note" ></div>
            </div>
            <div className="container">
                {
                    show ?<MealItem data={item} /> :"Not Found"

                }
            </div>
           

        </div>
    </>
)
}
export default Meal;