# 🎯 Repository for unit testing practice

## API Livraria

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN)

## Resumo do projeto

Projeto de API REST para prática de JavaScript.
Livraria com sistema de cadastro e manejo de livros, autores e editoras.


## Stack utilizada

* `Node.js` v16.14.2
* `express` v4.18.1,
* `knex` v2.1.0
* `sqlite3` v5.0.8


## Instalação

Este projeto já conta com o código necessário para subir a API em um servidor local:

```
├── package.json
├── package-lock.json
├── README.md
├── server.js
├── src
│   ├── app.js
│   ├── controllers
│   │   └── livrosController.js
│   │   └── autoresController.js
│   │   └── editorasController.js
│   ├── db
│   │   ├── dbconfig.js
│   │   └── livraria.sqlite
│   ├── models
│   │   └── livro.js
│   │   └── autor.js
│   │   └── editora.js
│   └── routes
│       ├── autoresRoutes.js
│       ├── editorasRoutes.js
│       ├── index.js
│       └── livrosRoutes.js
```


### Instalação do projeto
* Baixe o repositório do projeto, navegue via terminal até a pasta e instale as dependências necessárias com `npm install`.
* Confira se a pasta `node_modules` foi criada na raiz do projeto.


### Instalação dos drivers do SQLite (Linux Debian/Ubuntu)

Este projeto utiliza o SQLite como gerenciador de banco de dados SQL. O SQLite utiliza um arquivo, normalmente de extensão `.sqlite` ou `.db`, para guardar os dados.

O projeto já conta com uma base de dados configurada e populada com alguns dados iniciais, localizado na pasta `src/db/livraria.sqlite`. Para utilizar estes dados é necessário ter os drivers do SQLite instalados localmente no computador; você pode seguir os passos abaixo para instalar e acessar os dados:

* Instalar o `sqlite` globalmente no computador:
  `sudo apt update`
  `sudo apt install sqlite3`

* Verifique a instalação com:
  `sqlite3 --version`

* Utilize o cli do SQLite para acessar o arquivo `src/db/livraria.sqlite` e fazer consultas via terminal:
  `sqlite3 ./src/db/livraria.sqlite`. O terminal deverá exibir a seguinte mensagem (a data e hora do acesso serão as locais do momento em que você acessar):
  ```
  SQLite version 3.31.1 2020-01-27 19:55:54
  Enter ".help" for usage hints.
  sqlite>
  ```

  ### Instalação dos drivers do SQLite (Linux Debian/Ubuntu)

Este projeto utiliza o SQLite como gerenciador de banco de dados SQL. O SQLite utiliza um arquivo, normalmente de extensão `.sqlite` ou `.db`, para guardar os dados.

O projeto já conta com uma base de dados configurada e populada com alguns dados iniciais, localizado na pasta `src/db/livraria.sqlite`. Para utilizar estes dados é necessário ter os drivers do SQLite instalados localmente no computador; você pode seguir os passos abaixo para instalar e acessar os dados:

* Instalar o `sqlite` globalmente no computador:
  `sudo apt update`
  `sudo apt install sqlite3`


### Instalação dos drivers do SQLite (Windows)
* Faça o download dos drivers SQLite na página: https://www.sqlite.org/download.html

* Selecione o sistema operacional e faça o download do arquivo [Precompiled binaries for Windows - SQLite Tools](https://sqlite.org/2022/sqlite-tools-win32-x86-3380500.zip)

* Crie uma pasta chamada  ```sqlite3```na unidade C:\ do seu computador. O caminho final será: ``` C:\sqlite3```.

* Insira os arquivos SQLite descompactados na pasta C:\sqlite3 (você deverá extrair os arquivos para a pasta C:\sqlite3)
* Para permitir que a CLI do SQLite3 possa ser utilizada em diferentes locais, precisamos adicionar uma variável de ambiente ao windows. Siga os passos:

	 * Abra "Exibir configurações avançadas do Sistema" (Advanced System Properties). Painel de controle (Control Panel) > Sistema (System) > Configurações avançadas do Sistema (Advanced System Settings).
	* Selecione "Variáveis de Ambiente"
	* Em variáveis de sistema, selecione a variável PATH e clique em **Editar..**
	* **Adicione C:\sqlite3 ao final** e selecione a opção ok

[![Add sqlite3 to Windows PATH Variable ](https://storage.googleapis.com/static.configserverfirewall.com/images/windows10/sqlite3/sqlite3path.png)](https://storage.googleapis.com/static.configserverfirewall.com/images/windows10/sqlite3/sqlite3path.png)


Depois execute o cmd como administrador e rode o comando ```sqlite3```

### Configuração dos drivers SQLite

* Verifique a instalação com:
  `sqlite3 --version`

* Utilize o cli do SQLite para acessar o arquivo `src/db/livraria.sqlite` e fazer consultas via terminal:
  `sqlite3 ./src/db/livraria.sqlite`. O terminal deverá exibir a seguinte mensagem (a data e hora do acesso serão as locais do momento em que você acessar):
  ```
  SQLite version 3.31.1 2020-01-27 19:55:54
  Enter ".help" for usage hints.
  sqlite>
  ```

* Digite os seguintes comandos no terminal do SQLite para verificar se a versão instalada tem suporte a FKs (*foreign keys*):
  ```
  PRAGMA foreign_keys;
  ```

  Deve retornar `1` se o suporte estiver habilitado e `0` se não estiver.
  Caso não esteja, insira o seguinte comando no terminal do SQLite para ativar:

  ```
  PRAGMA foreign_keys = ON;
  ```

  Você pode rodar novamente o comando `PRAGMA foreign_keys;` para verificar novamente se o suporte está habilitado. Agora deve retornar `1`.


### Acesso ao banco de dados

Você pode utilizar o CLI do SQLite para fazer consultas ao banco e conferir se os dados iniciais estão retornando.

* Utilize o cli do SQLite para acessar o arquivo `src/db/livraria.sqlite`:
  `sqlite3 ./src/db/livraria.sqlite`

* Digite `.tables` para exibir as tabelas já criadas no banco:
  ```
  sqlite> .tables
  autores   editoras  livros
  ```

* Digite `SELECT * FROM autores;` para exibir o conteúdo da tabela `autores`:
  ```
  sqlite> SELECT * FROM autores;
  1|JRR Tolkien|sul-africano|2022-06-06 19:30:55
  2|Ursula LeGuin|estadunidense|2022-06-06 19:30:55
  3|Machado de Assis|brasileira|2022-06-06 19:30:55
  sqlite>
  ```

* Você pode testar os comandos `SELECT * FROM livros;` e `SELECT * FROM editoras;` para conferir os dados destas tabelas que já deixamos prontos para serem usados na API.

> Importante: Usaremos a API para consultar, criar, atualizar e excluir dados do banco. Não utilize o terminal do SQLite para fazer estas alterações direto nas tabelas.


## Como rodar a API

* No terminal, acesse a pasta raiz do projeto e insira o comando `npm run dev` para rodar o projeto em modo de desenvolvimento. Você deverá ver no terminal a seguinte mensagem:
  ```
  > api-js-local@1.0.0 dev
  > nodemon server.js

  [nodemon] 2.0.16
  [nodemon] to restart at any time, enter `rs`
  [nodemon] watching path(s): *.*
  [nodemon] watching extensions: js,mjs,json
  [nodemon] starting `node server.js`
  Servidor escutando em http://localhost:3000
  ```

* Os recursos da API poderão ser acessados a partir da *base URL* `http://localhost:3000`.

  > Esta API está programada para ser acessada a partir de `http://localhost:3000`. Certifique-se de que não existem outros recursos ocupando a porta `3000` antes de subir o projeto.


### Endpoints

A API expõe os seguintes *endpoints* a partir da *base URL* `localhost:3000`:

`/livros`
* `GET /livros`
* `GET /livros/:id`
* `POST /livros`
* `PUT /livros/:id`
* `DELETE /livros/:id`

`/autores`
* `GET /autores`
* `GET /autores/:id`
* `GET /autores/:id/livros`
* `POST /autores`
* `PUT /autores/:id`
* `DELETE /autores/:id`

`/editoras`
* `GET /editoras`
* `GET /editoras/:id`
* `GET /editoras/:id/livros`
* `POST /editoras`
* `PUT /editoras/:id`
* `DELETE /editoras/:id`


## Roadmap

* Autenticação
* Tratamento de erros
* Validações
