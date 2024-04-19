import { IPokemon } from '@/interfaces/pokemon'
import PokemonCard from './pokemon-card/PokemonCard'

export default function PokemonsList({ pokemons }: { pokemons: IPokemon[] }) {
  return (
    <div>
      <section>
        <div>
          {pokemons.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {pokemons.map((pokemon: IPokemon) => (
                <PokemonCard
                  key={pokemon.id}
                  {...pokemon}
                  handleClick={() => console.log('hey')}
                />
              ))}
            </div>
          ) : (
            <div>Nadinha</div>
          )}
        </div>
      </section>
    </div>
  )
}
