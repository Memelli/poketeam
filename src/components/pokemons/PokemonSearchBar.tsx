import { ChangeEvent, FormEvent, useState } from 'react'
import clsx from 'clsx'
import { SortOrder } from '@/pages/HomePage'
import { PokemonTypesEnum } from '@/interfaces/pokemon-enum-types'

export interface SearchPokemonEvent {
  text: string
  selectedType: string
  sortOrder: SortOrder
}

interface Props {
  text: string
  sortOrder: SortOrder
  onSearch: (searchEvent: Partial<SearchPokemonEvent>) => void
}

export default function PokemonSearchBar({
  text: initialSearchParam,
  sortOrder,
  onSearch,
}: Props) {
  const [searchParam, setSearchParam] = useState<string>(initialSearchParam)

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch({ text: searchParam })
  }

  const handleSelectedType = (event: ChangeEvent<HTMLSelectElement>) => {
    onSearch({ selectedType: event.target.value })
  }

  return (
    <form onSubmit={handleSearch}>
      <div className="flex items-center justify-between overflow-hidden rounded-lg border bg-white px-2 py-1">
        <div className="mr-4 flex items-center text-gray-300">
          <svg
            onClick={() =>
              onSearch({ sortOrder: sortOrder !== 'asc' ? 'asc' : '' })
            }
            xmlns="http://www.w3.org/2000/svg"
            className={clsx('h-5 w-5 cursor-pointer', {
              'text-blue-300': sortOrder === 'asc',
            })}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 17l-4 4m0 0l-4-4m4 4V3"
            />
          </svg>
          <svg
            onClick={() =>
              onSearch({ sortOrder: sortOrder !== 'desc' ? 'desc' : '' })
            }
            xmlns="http://www.w3.org/2000/svg"
            className={clsx('h-5 w-5 cursor-pointer', {
              'text-blue-300': sortOrder === 'desc',
            })}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7l4-4m0 0l4 4m-4-4v18"
            />
          </svg>
        </div>

        <input
          className="flex-grow px-2 text-base text-gray-500 outline-none"
          type="text"
          placeholder="Procurar..."
          onInput={(event: ChangeEvent<HTMLInputElement>) =>
            setSearchParam(event.target.value)
          }
        />
        <div className="mx-auto flex items-center rounded-lg">
          <select
            className="mr-2 cursor-pointer rounded-lg border-2 px-4 py-2 text-base text-gray-800 outline-none"
            onChange={handleSelectedType}
          >
            <option value="">All</option>
            {Object.entries(PokemonTypesEnum).map(([name, value]) => (
              <option key={value} value={value}>
                {name}
              </option>
            ))}
          </select>
          <button className="rounded-lg bg-blue-400 px-4 py-2 text-base font-thin text-white">
            Buscar
          </button>
        </div>
      </div>
    </form>
  )
}
