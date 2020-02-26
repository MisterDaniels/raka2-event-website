<h1 align="center">
  HACKATON EXPO VIDEIRA 2020
</h1>

<p align="center">
Software para organização de palestras no evento Expo Videira 2020.
</p>
<p align="center">
Contém uma plataforma onde o visitante pode se cadastrar nas palestras disponíveis e emitir seu certificado de participação.
</p>

<h1 align="center">
  ÍNDICE
</h1>

<p align="center">
  <a href="#id_01">USUÁRIO</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#id_02">DESENVOLVEDOR</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#id_03">GERAIS</a>
</p>

## USUÁRIO <a name="id_01"></a>
> Esse tópico descreve a usabilidade do usuário...

#### Primeiro acesso:
- Acesse a página principal.
- Se cadastre.
- Insira seus dados corretamente e prossiga.
- Marque as palestras de seu interesse e clique em escolher palestras.
- Pronto, você já está inscrito.
- Observação: Você deverá confirmar presença na hora da palestra e seu certificado estará disponível.

#### Pegando seu Certificado:
- Acesse a página principal.
- Insira seu CPF e entre.
- Pronto. Você será redirecionado e poderá baixar seus certificados de participação.
- Observação: Cique no botão para baixar o certificado.

## DESENVOLVEDOR <a name="id_02"></a>
> Esse tópico descreve a usabilidade do desenvolvedor...
#### Dependências principais:
- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/download/)

#### Instalação:

```sh
npm i # Instalação das dependências do projeto
```

#### Configuração do Banco de Dados:

1. Crie um arquivo .env na raíz do projeto...
2. Copie o conteúdo do arquivo .env.example...
3. Adicione as credencias do seu PostgreSQL, como por exemplo:
    - ``` DB_HOST=127.0.0.1 # ou localhost ```
    - ``` DB_USER=seu-usuario-do-banco-de-dados ```
    - ``` DB_PASS=sua-senha-secreta ```
    - ``` DB_NAME=nome-do-banco-de-dados-a-ser-criado ```


#### Configuração para desenvolvimento:

Rode os comandos abaixo:
 ```sh
 npm run config # cria banco e roda migrations

 npm run dev # roda as migrations pendentes e inicia o nodemon
 ```
 
## GERAIS <a name="id_03"></a>
> Esse tópico contém informações gerais sobre o projeto...

#### Diagrama de Classes:

![diagramaDeClasses](https://ap.imagensbrasil.org/images/2020/02/25/Diagrama.png)

#### Diagrama de Atividades:
![login](https://ap.imagensbrasil.org/images/2020/02/25/Sem-titulo.png)
![cadastroVisitantes](https://ap.imagensbrasil.org/images/2020/02/25/cadastroVisitantes.png)
![certificado](https://ap.imagensbrasil.org/images/2020/02/25/certificado.jpg)
![cadastroPalestra](https://ap.imagensbrasil.org/images/2020/02/25/cadastroPalestra.jpg)
