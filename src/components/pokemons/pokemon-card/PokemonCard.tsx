import { useState } from 'react'
import { motion } from 'framer-motion'

import { IPokemon } from '@/interfaces/pokemon'
import PokemonCardFront from './PokemonCardFront'
import PokemonCardBack from './PokemonCardBack'

interface IPokemonCardProps extends IPokemon {
  handleClick: (pokemonId: number) => void
}

export default function PokemonCard({
  id,
  name,
  types,
  stats,
  handleClick,
}: IPokemonCardProps) {
  const [showDetails, setShowDetails] = useState<boolean>(false)

  const handleShowDetails = () => {
    setShowDetails((state) => !state)
  }

  return (
    <motion.div
      className="w-full bg-white flex flex-col justify-center items-center shadow cursor-pointer h-72"
      initial={{ opacity: 0.5, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        ...(showDetails && { rotateY: 180, scaleX: -1 }),
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 20,
      }}
      whileHover={{ y: -5 }}
      onClick={handleShowDetails}
    >
      {!showDetails ? (
        <PokemonCardFront
          handleClick={handleClick}
          id={id}
          name={name}
          types={types}
        />
      ) : (
        <PokemonCardBack name={name} stats={stats} />
      )}
    </motion.div>
  )
}
