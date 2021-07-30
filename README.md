# Simple Auth Example

Este projeto foi criado usando [TypeScript](https://www.typescriptlang.org/), [TypeOrm](https://typeorm.io/#/), [Express](https://expressjs.com/), [Postgres](https://www.postgresql.org/), [JsonWebToken](https://jwt.io/)

<br>
<br>

## Endpoints
  - POST /users
    - Params
      - username: string
      - email: string,
      - password: string
  - POST /sessions
    - Params
      - username: string
      - password: string

<br>
<br>

## Como rodar o projeto

Você deve ter um servidor postgres rodando em sua maquina, recomendo usar o [Docker](https://docker.com/)

Caso não tenha um servidor postgres, instale o Docker:

```bash
  #Ubuntu
  $ sudo docker pull postgres

  $ sudo docker run --name postgres -p 5432:5432 -e     POSTGRES_PASSWORD=postgres -d postgres


  #Caso ja tenho um servidor postgres basta iniciar ele
  $ sudo docker start postgres(ou o nome do container)
```

Crie uma nova database com nome "auth" e instale a extensão uuid-ossp na database

<br>

Abra o terminal:

```bash
  $ git clone https://github.com/Auguxto/simple-auth-example.git auth_example

  $ cd auth_example

  $ yarn ou npm install (para instalar as dependencias)

  $ yarn typeorm migration:run

  $ yarn dev (e o projeto ira rodar <3)
```

<br>

Pronto a API ja esta rodando em [localhost:3333](http://localhost:3333)

![API ins running](https://i.imgur.com/a7ZJejN.png)

Para testar use o [Insomnia](https://insomnia.rest/)
