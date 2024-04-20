import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'

const PokeEndpoint = new HttpLink({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
})

const HasuraEndpoint = new HttpLink({
  uri: 'http://localhost:8080/v1/graphql',
})

export const client = new ApolloClient({
  link: ApolloLink.split(
    (operation) => operation.getContext().clientName === 'PokeEndpoint',
    PokeEndpoint,
    HasuraEndpoint,
  ),
  cache: new InMemoryCache({ addTypename: false }),
})
