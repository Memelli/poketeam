import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import { PokemonProvider } from '@/context/pokemon-context'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PokemonProvider>
              <HomePage />
            </PokemonProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
