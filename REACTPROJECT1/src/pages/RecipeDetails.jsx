import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom';

function RecipeDetails() {
    const {id} = useParams();
    const [recipe,SetRecipe] = useState({});
    const [loading,SetLoading] = useState(true)
    const [errorMsg,SetErrorMsg] = useState("");
    async function fetchRecipe(params){
        try{
            const {data} = await axios.get(`https://dummyjson.com/recipes/${id}`)
            console.log(data)
            SetRecipe(data)
            SetLoading(false);
        }catch(error){
            
            SetErrorMsg("Could not load recipe details. Please try again.");
            console.log(error)
        }
        SetLoading(false);
    }
    //See the above task is asynchronous so that task can take time like 
    //sometimes the internet is slow and there can be other problems so till that time
    //the below properties wouldn't be accessed cause the object has not came and for that case we have used the ? symbol at
    //join and map function and till that time the image section would be empty on the page so that wouldn't
    //look good so we would make a method to show that the page is loading

    useEffect(()=>{
        fetchRecipe();
    },[])
    if(loading){
        return <h1>LOADING...</h1>
    }
    if (errorMsg) {
        return (
        <main className="max-w-6xl mx-auto px-4 py-8">
            <Link
            to="/"
            className="text-accent hover:underline inline-flex items-center gap-1 mb-4"
            >
            <svg
                className="w-4 h-4 stroke-current fill-none"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Home
            </Link>
            <p className="text-accent">{errorMsg || "Recipe not found."}</p>
        </main>
        );
  }
  return (

    <main className="max-w-6xl mx-auto px-4 py-8">
      {}
      <Link to="/" className="text-accent hover:underline inline-flex items-center gap-1 mb-6">
        <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Back to Home
      </Link>

      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full md:w-1/2 h-80 object-cover rounded-md border border-border"
        />
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="font-serif text-3xl font-bold text-text mb-2">{recipe.name}</h1>
          <p className="text-muted mb-4">{recipe.cuisine} - {recipe.difficulty}</p>
          <div className="flex items-center gap-1 mb-4 font-medium">
            <svg className="w-4 h-4 fill-accent" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>{recipe.rating} ({recipe.reviewCount} reviews)</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm border-t border-border pt-4 mb-4">
            <p><strong>Prep time:</strong> {recipe.prepTimeMinutes} mins</p>
            <p><strong>Cook time:</strong> {recipe.cookTimeMinutes} mins</p>
            <p><strong>Servings:</strong> {recipe.servings}</p>
            <p><strong>Calories:</strong> {recipe.caloriesPerServing} kcal</p>
          </div>
          <p className="text-sm text-muted mb-1">
            <strong>Meal Type:</strong> {recipe?.mealType?.join(', ')}
          </p>
          <p className="text-sm text-muted">
            <strong>Tags:</strong> {recipe?.tags?.join(', ')}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border pt-8">
        <div>
          <h2 className="font-serif text-xl font-bold mb-4">Ingredients</h2>
          <ul className="list-disc pl-5 space-y-1">
            {recipe?.ingredients?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-xl font-bold mb-4">Instructions</h2>
          <ol className="list-decimal pl-5 space-y-2">
            {recipe?.instructions?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  )
}

export default RecipeDetails