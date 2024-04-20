import { IPokemon } from '@/interfaces/pokemon'
import PokemonCard from './pokemon-card/PokemonCard'

export default function PokemonsList({
  pokemons,
  isAdd,
}: {
  pokemons: IPokemon[]
  isAdd: boolean
}) {
  return (
    <div>
      <section>
        <div>
          {pokemons.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {pokemons.map((pokemon: IPokemon) => (
                <PokemonCard isAdd={isAdd} key={pokemon.id} {...pokemon} />
              ))}
            </div>
          ) : (
            <p className="font-bold">Nenhum Pokemon foi encontrado...</p>
          )}
        </div>
      </section>
    </div>
  )
}
