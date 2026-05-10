import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [recipes,setRecipes] = useState([])

  const [timerId, setTimerId] = useState(null)


  useEffect(()=>{
    clearTimeout(timerId)
    setTimerId(
      setTimeout(() => {
        fetch('https://dummyjson.com/recipes')
        .then(res => res.json())
        .then((res) => setRecipes(res.recipes));
      },1000)
    )
  },[])

  return (
    <>
      <section className='box'>
      {recipes.map((e) => (
        <Card 
          key={e.id}
          image={e.image}
          name={e.name}
          ingredients={e.ingredients.reduce((res,e)=>res+" "+e,"")}
          cuisine={e.cuisine}
          rating={e.rating}
        />
      ))}
      </section>
    </>
  )
}

export default App
