import './App.css'
import { PokemonProvider } from '@/context/pokemon-context'
import HomePage from './pages/HomePage'

function App() {
  return (
    <PokemonProvider>
      <HomePage />
    </PokemonProvider>
  )
}

export default App
