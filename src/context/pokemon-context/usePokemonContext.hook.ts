import { useContext } from 'react'
import PokemonContext, { IPokemonContext } from './PokemonContext'

export const usePokemonContext = (): IPokemonContext => {
  const context = useContext(PokemonContext)
  if (!context) {
    throw new Error('usePokemonContext must be used within a PokemonProvider')
  }

  return context
}
