# HACKATON EXPO VIDEIRA 2020

## Dependências principais
- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/download/)

## Download e configuração do projeto

```sh
git clone https://github.com/douglasscaini/raka2.git

cd raka2/

npm i # Instalação das dependências do projeto
```

## Configuração das variáveis de ambiente

1. Crie um arquivo .env na raíz do projeto
2. Copie o conteúdo do arquivo .env.example
3. Adicione as credencias do seu PostgreSQL como por exemplo:
    - ``` DB_PASS=sua-senha-secreta ```
    - ``` DB_USER=seu-usuario-do-banco-de-dados ```
    - ``` DB_HOST=127.0.0.1 # ou localhost ```
    - ``` DB_NAME=nome-do-banco-de-dados-a-ser-criado ```

## Script de configuração e desenvolvimento

Primeiro rode apenas o script
 ```sh
 npm run config # cria banco e roda migrations

 npm run dev # roda as migrations pendentes e inicia o nodemon
 ```
