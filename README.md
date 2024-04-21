# TechStack

Para este projeto foi utilizado React + Vite + TypeScript. Não foi utilizado nenhuma biblioteca para state management, apenas a Context API. Para as conexões com o Hasura (API) foi utilizado o ApolloClient.

Por gostar muito do Tailwind, acabei escolhendo ele junto com a biblioteca Shadcn/ui.

Versão do node recomendada: 20.12.2 (LTS/Iron)

# Como rodar o projeto

## Front
Para rodar o front, construa a Docker image usando o comando

```bash
docker build -t my-poke-team .
```
Quando o docker terminar de construir a imagem, e instalar tudo o que for preciso, rode o comando:
```bash
docker run -d --name front -p 5000:5000 my-poke-team
```
e o front deve estar disponível na url <pre>http://localhost:5000</pre>

A flag -d é para o container rodar no modo detached, e a name para darmos um nome ao container, que se precisarmos parar ele, pode rodar apenas o comando
```bash
docker stop front
```

## Back

Para inicializar o projeto basta usar o comando docker-compose up -d.

Feito isso, o Hasura vai inicializar no endereço <pre>http://localhost:8080/console/</pre>

Importe o metadata do hasura, que está contido na pasta ./src/hasura-api, e depois, importe o schema do PostgreSQL, que está no root do projeto com o nome de schema.json.