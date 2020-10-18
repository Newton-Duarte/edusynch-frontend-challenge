<h3 align="center">EduSynch Front-end Challenge</h3>

Este desafio consiste no desenvolvimento da interface de uma landing e uma dashboard utilizando Angularjs.

##### Landing
![Landing](/screenshots/landing.png)

##### Dashboard
![Dashboard](/screenshots/dashboard.png)

### Start do projeto

1. Clone o projeto: `git clone <link>`
2. Entre na pasta do projeto: `cd edusynch-frontend-challenge`
3. Instale as dependências do projeto:
3.1 Backend: `cd backend`
3.1.1 Dentro da pasta backend rode: `yarn` ou `npm install`
3.2 Frontend: `cd frontend` (Primeiro volte para pasta raiz ou `cd ../frontend`)
3.2.1 Dentro da pasta frontend rode: `yarn` ou `npm install`

##### Scripts

O projeto possui scripts para facilitar o start das aplicações:

- Backend
  - __build__: `yarn build` ou `npm run build`
    - O script __build__ converte os códigos em typescript para javascript em uma pasta __./dist__
  - __dev:server__: `yarn dev:server` ou `npm run dev:server`
    - O script __dev:server__ inicia um servidor em Express.js no endereço: `http://localhost:3333`.
    - O servidor possui apenas uma rota `http://localhost:3333/courses` para servir de dados fictícios para o frontend.
- Frontend
  - __build__: `npm run build`
    - O script __build__ converte o projeto para produção em uma pasta __./dist__
  - __start__: `npm start`
    - O script __start__ inicia um servidor de desenvolvimento com webpack no endereço: `http://localhost:8080`


##### Descrição

A aplicação frontend possui duas páginas: __landing__ e __dashboard__.

A landing é a primeira página acessando o endereço: `http://localhost:8080`
A dashboard é a segunda página acessando o endereço: `http://localhost:8080/dashboard`