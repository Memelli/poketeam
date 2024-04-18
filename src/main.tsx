import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {client} from './graphql/client.ts'
import { ApolloProvider } from '@apollo/client'
import Router from './utils/routers.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  </React.StrictMode>,
)
