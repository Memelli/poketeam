import { IPokemon } from '@/interfaces/pokemon'

interface IPokemonCardBackProps {
  name: string
  stats: IPokemon['stats']
}

const PokemonStatMap: Record<string, string> = {
  hp: 'HP',
  attack: 'Attack',
  defense: 'Defense',
  'special-attack': 'Special Attack',
  'special-defense': 'Special Defense',
  speed: 'Speed',
}

export default function PokemonCardBack({
  name,
  stats,
}: IPokemonCardBackProps) {
  return (
    <>
      <div className="flex items-center mb-4">
        <p className="text-xl text-gray-700 font-bold mr-2">{name}</p>
        <img
          className="object-center object-cover rounded-full h-8 w-8"
          src={`https://img.pokemondb.net/sprites/home/normal/${name}.png`}
          alt={name}
        />
      </div>
      {Object.keys(stats).map((stat) => (
        <div key={stat}>
          <span className="inline-block rounded-full text-gray-600 bg-gray-100 px-3 py-1 text-xs font-bold mb-1">
            {PokemonStatMap[stat]} <b>{stats[stat]}</b>
          </span>
        </div>
      ))}
    </>
  )
}
