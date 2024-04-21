import { motion } from 'framer-motion'

export interface Pagination {
  page: number
  perPage: number
  total: number
}

interface Props extends Pagination {
  onPageChange: (page: number) => void
}

export default function PokemonPagination({
  page,
  perPage,
  total,
  onPageChange,
}: Props): JSX.Element | null {
  const totalPages = () => {
    const pageNumbers = total / perPage
    if (pageNumbers % 1 === 0) {
      return pageNumbers
    }
    return parseInt(String(pageNumbers + 1))
  }

  if (total <= perPage) {
    return null
  }

  return (
    <div className="xs:mt-0 mb-2 mt-2 inline-flex items-center justify-center">
      <motion.button
        disabled={page === 1}
        className="mr-1 rounded-l bg-white px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-blue-300 disabled:opacity-50"
        onClick={() => onPageChange(Math.max(--page, 1))}
        whileTap={{ scale: 0.9 }}
      >
        Página Anterior
      </motion.button>
      <motion.button
        disabled={page * perPage >= total!}
        className="rounded-r bg-white px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-blue-300 disabled:opacity-50"
        onClick={() =>
          onPageChange(Math.min(++page, Math.ceil(total! / perPage)))
        }
        whileTap={{ scale: 0.9 }}
      >
        Próxima página
      </motion.button>
      <p className="ml-10 text-sm font-bold text-white">
        {page} de {totalPages()}
      </p>
    </div>
  )
}
