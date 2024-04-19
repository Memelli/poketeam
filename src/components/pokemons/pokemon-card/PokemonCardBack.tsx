import { IPokemon } from '@/interfaces/pokemon'

interface IPokemonCardBackProps {
  name: string
  stats: IPokemon['stats']
}

const PokemonStatMap: Record<string, string> = {
  hp: 'HP',
  attack: 'Ataque',
  defense: 'Defesa',
  'special-attack': 'Ataque Especial',
  'special-defense': 'Defesa Especial',
  speed: 'Velocidade',
}

export default function PokemonCardBack({
  name,
  stats,
}: IPokemonCardBackProps) {
  return (
    <>
      <div className="mb-4 flex items-center">
        <p className="mr-2 text-xl font-bold text-gray-700">{name}</p>
        <img
          className="h-8 w-8 rounded-full object-cover object-center"
          src={`https://img.pokemondb.net/sprites/home/normal/${name}.png`}
          alt={name}
        />
      </div>
      {Object.keys(stats).map((stat) => (
        <div key={stat}>
          <span className="mb-1 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600">
            {PokemonStatMap[stat]} <b>{stats[stat]}</b>
          </span>
        </div>
      ))}
    </>
  )
}
