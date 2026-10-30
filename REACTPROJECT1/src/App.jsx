import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'
import NotFound from './pages/NotFound'
import RecipeDetails from './pages/RecipeDetails'

function App() {

  return (
    <div className="min-h-screen bg-background text-text font-sans">
      <Navbar/>
    <Routes>
      {/* <Route path="/" element={<Navbar/>}/> */}
      <Route path="/" element={<Home/>}/>{/* Here home would not render 
      cause it is a child so we have to use outlet tag in the navbar component*/}
      <Route path="*" element={<NotFound/>}/>
      <Route path="/recipe/:id" element={<RecipeDetails/>}/>
    </Routes>
    </div>
  )
}

export default App
