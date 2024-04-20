import ReactDOM from 'react-dom/client'
import './index.css'

import { client } from './graphql/client.ts'
import { ApolloProvider } from '@apollo/client'
import App from './App.tsx'
import PokemonProvider from './context/pokemon-context/PokemonProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </ApolloProvider>,
)
