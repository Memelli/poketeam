# TechStack

Para este projeto foi utilizado React + Vite + TypeScript. Não foi utilizado nenhuma biblioteca para state management, apenas a Context API. Para as conexões com o Hasura (API) foi utilizado o ApolloClient.

Por gostar muito do Tailwind, acabei escolhendo ele junto com a biblioteca Shadcn/ui.

Versão do node recomendada: 20.12.2 (LTS/Iron)

# Como rodar o projeto
Para inicializar o projeto basta usar o comando docker-compose up -d.

Feito isso, o Hasura vai inicializar no endereço http://localhost:8080/console/.

Importe o metadata do hasura, que está contido na pasta ./src/hasura-api, e depois, importe o schema do PostgreSQL, que está no root do projeto com o nome de schema.json.