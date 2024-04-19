import { IPokemon } from '@/interfaces/pokemon'
import { PokemonEnumTypes } from '@/interfaces/pokemon-enum-types'
import { PokemonColorByType } from '@/utils/pokemon-color-by-type'

interface IPokemonCardFrontProps {
  name: string
  types: IPokemon['types']
  id: number
  handleClick: (id: number) => void
}

export default function PokemonCardFront({
  name,
  types,
  id,
  handleClick,
}: IPokemonCardFrontProps) {
  const handlePokemonCardAction = () => {
    handleClick(id)
  }
  return (
    <>
      <div className="mb-2">
        <img
          src={`https://img.pokemondb.net/sprites/home/normal/${name}.png`}
          alt={name}
          width={128}
          height={128}
        />
      </div>
      <div className="text-center mb-4">
        <p className="text-xl text-gray-600 font-bold mb-2">{name}</p>
        {types.map((type: string) => (
          <span
            key={type}
            className={`inline-block rounded-full text-white px-2 py-1 text-xss font-bold mr-3 ${PokemonColorByType[type as PokemonEnumTypes]}`}
          >
            {type.toUpperCase()}
          </span>
        ))}
      </div>
      {/* TODO: Adicionar o pokemon ao time */}
      <div onClick={(e) => e.stopPropagation()}>
        <button className="text-black" onClick={handlePokemonCardAction}>
          adicionar
        </button>
      </div>
    </>
  )
}
