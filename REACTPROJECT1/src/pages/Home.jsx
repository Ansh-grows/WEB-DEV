import  { useEffect, useState } from 'react'
import axios from 'axios'
import RecipeCard from '../components/RecipeCard'

function Home() {
    const [recipes,SetRecipes] = useState([])
    const [total,setTotal] = useState(0);
    const [loading,SetLoading] = useState(true)
    const [errorMsg,SetErrorMsg] = useState("");
    const [searchQuery,SetSearchQuery] = useState("")
    async function fetchRecipes(skipCount,query){
      SetLoading(true)
        try{
          let url = `https://dummyjson.com/recipes?limit=6&skip=${skipCount}`
          if(query){
              url = `https://dummyjson.com/recipes/search?limit=6&skip=${skipCount}&q=${query}`
          }
          

            const {data} = await axios.get(url)
            console.log(data)
            
            SetRecipes((prev)=>
              skipCount===0 ? data.recipes : [...prev,...data.recipes],);
            console.log(recipes)
            setTotal(data.total)
        }catch(error){
          SetErrorMsg("Could not fetch menu. Please try again later.")
            console.log(error)
        }
        SetLoading(false)
    }
    
   
    useEffect(()=>{
        fetchRecipes(0);
    },[]);
       
    function handleSearch(e){
      e.preventDefault;
      const form = new FormData(e.target)
      const query = form.get("query").trim()
      SetSearchQuery(query)
      //if(query){
      fetchRecipes(0,query);
      //}
    }
    if(loading){
      return(
        <>
       <h1>LOADING...</h1>
        </>
      )
    }
    if(errorMsg){
      return(
        <>
        <main className="max-w-6xl mx-auto px-4 py-8">
            
            <p className="text-accent text-center">{errorMsg}</p>
        </main>
        </>
      )
    }

  return (
    <>
    
    <main className="max-w-6xl mx-auto px-4 py-8">
      {}
      {}
      <form onSubmit={handleSearch} className="flex gap-2 max-w-md mx-auto mb-8">
        <input
          type="text"
          name="query"
          placeholder="Search recipes..."
          className="flex-1 border border-border rounded px-3 py-2 bg-card text-text outline-none focus:border-accent"
        />
        <button type="submit" className="bg-accent hover:bg-accent-hover text-white rounded px-4 py-2 font-medium">
          Search
        </button>
      </form>
      {loading && <h1>LOADING</h1>}
      {!loading && recipes.length===0 && (
        <h1>{`NO RECIPES FOUND FOR ${searchQuery}`}</h1>
      )}
      {}
      {}
      {}
      {}
      { <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div> }

      {recipes.length<total && (<div className="text-center mt-8">
        <button
          type="button"
          onClick={()=>fetchRecipes(recipes.length,searchQuery)}
          className="bg-accent hover:bg-accent-hover text-white rounded px-6 py-2 font-medium"
        >
          Load More
        </button>
      </div>)}
      
      {/* <div>
        {recipes.map((r)=>{
        return (
    <ul>
    <li key={r.id}>{r.name}</li>
    </ul>
        )
      })}
      </div> */}
      
      

      {}
      {}
      {}
      {}
      {}
    </main>
    </>
  )
}

export default Home