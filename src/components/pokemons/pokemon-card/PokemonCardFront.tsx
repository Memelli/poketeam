import { CardHeader } from '@/components/ui/card'
import { IPokemon } from '@/interfaces/pokemon'
import { PokemonTypesEnum } from '@/interfaces/pokemon-enum-types'
import capitalize from '@/utils/capitalize'
import { PokemonColorByType } from '@/utils/pokemon-color-by-type'

interface IPokemonCardFrontProps {
  name: string
  types: IPokemon['types']
  id: number
  button: React.ReactNode
}

export default function PokemonCardFront({
  name,
  types,
  button,
}: IPokemonCardFrontProps) {
  return (
    <CardHeader className="flex items-center justify-center">
      <div className="mb-2">
        <img
          src={`https://img.pokemondb.net/sprites/home/normal/${name}.png`}
          alt={name}
          width={128}
          height={128}
        />
      </div>
      <div className="mb-4 text-center">
        <p className="mb-2 text-xl font-bold text-gray-600">
          {capitalize(name)}
        </p>
        {types.map((type: string) => (
          <span
            key={type}
            className={`mr-3 inline-block rounded-full px-2 py-1 text-xs font-bold text-white ${PokemonColorByType[type as PokemonTypesEnum]}`}
          >
            {type.toUpperCase()}
          </span>
        ))}
      </div>
      {/* TODO: Adicionar o pokemon ao time */}
      <div onClick={(e) => e.stopPropagation()}>{button}</div>
    </CardHeader>
  )
}
