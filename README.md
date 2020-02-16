# HACKATON EXPO VIDEIRA 2020

## Dependências principais
- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/download/)

## Download e configuração do projeto

```sh
git clone https://github.com/douglasscaini/raka2.git

cd raka2/

npm i # Instalação das dependências do projeto

npm run dev # Inicia o projeto para o desenvolvimento
```

## Configuração das variáveis de ambiente

1. Crie um arquivo .env na raíz do projeto
2. Copie o conteúdo do arquivo .env.example
3. Adicione as credencias do seu PostgreSQL como por exemplo:
    - ``` DB_PASS=sua-senha-secreta ```
    - ``` DB_USER=seu-usuario-do-banco-de-dados ```
    - ``` DB_HOST=127.0.0.1 # ou localhost ```
    - ``` DB_NAME=nome-do-banco-de-dados-a-ser-criado ```

## Criação do banco de dados com [Sequelize ORM](https://sequelize.org/v5/)
 Para criar seu banco de dados abra o terminal ou cmd e rode o seguinte comando:
 ```sh
 npx sequelize db:create
 ```
 A saída deve ser algo como:
 ```sh
 Sequelize CLI [Node: 12.15.0, CLI: 5.5.1, ORM: 5.21.4]

Loaded configuration file "src/config/database.js".
Database "nome-do-seu-banco" created.
 ```

### Criando _Migrations_
Para entender mais sobre _migrations_  leia este [artigo](https://medium.com/@juniorb2s/migrations-o-porque-e-como-usar-12d98c6d9269).

Para criar novas migrations utilizando o Sequelize execute o seguinte comando:

```sh
npx sequelize migration:create --name nome-da-sua-migration
```

Será gerado um arquivo dentro da pasta `src/database/migrations` com um nome semelhante a 
`20200215120040-nome-da-sua-migration.js`, o qual baseia-se na data e hora da criação e nome da _migration_.

Dentro do arquivo criado há dois métodos sendo exportados o `up` e `down` que servem para 
criar e apagar a tabela do banco basicamente.

### Rodando as _Migrations_ para criação das tabelas do banco

```sh
npx sequelize db:migrate
```
A saída deve ser algo parecido com:

```sh
Sequelize CLI [Node: 12.15.0, CLI: 5.5.1, ORM: 5.21.4]

Loaded configuration file "src/config/database.js".
== 20200213202040-create-users: migrating =======
== 20200213202040-create-users: migrated (0.193s)
```