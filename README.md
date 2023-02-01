# my-graphql
graphql api test

1. Para rodar esse projeto clone para sua maquina atraves do comando `git clone https://github.com/pouthergust/my-graphql.git`

2. Instale as dependencias usando o comando `npm i` ou `npm install`

_**ATENÇÃO**: para que funcione corretamente é necessario que tenha um banco de dados instalado, de preferencia postgres, pois já está configurado no projeto_

Esse projeto tem o objetivo simples de salvar e resgatar usuarios do banco de dados 
Estrutura do usuario:

```graphql
type User = {
  id: ID
  name: String!
  email: String!
  password: String!
}
```
