import { useState } from 'react'
import { motion } from 'framer-motion'

import { IPokemon } from '@/interfaces/pokemon'
import PokemonCardFront from './PokemonCardFront'
import PokemonCardBack from './PokemonCardBack'
import PokemonModalAddTeam from './PokemonModalAddTeam'

import { Card } from '@/components/ui/card'

export default function PokemonCard({ id, name, types, stats }: IPokemon) {
  const [showDetails, setShowDetails] = useState<boolean>(false)

  const handleShowDetails = () => {
    setShowDetails((state) => !state)
  }

  return (
    <motion.div
      className="cursor-pointer"
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
      <Card className="flex h-72 w-full flex-col items-center justify-center">
        {!showDetails ? (
          <PokemonCardFront
            button={<PokemonModalAddTeam />}
            id={id}
            name={name}
            types={types}
          />
        ) : (
          <PokemonCardBack name={name} stats={stats} />
        )}
      </Card>
    </motion.div>
  )
}
