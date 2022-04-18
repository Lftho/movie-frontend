# Movie Frontend App

Find your next movie or create your watchlist with this App. It include reviews, rating, actors and anything you need to know about the movie.

- This application will help users find their next movie to watch by showing helpful stats
- Resource needed for the project is movie api, examples include Imdb, MovieDB etc.

## User Stories

- [ ] User can see all the latest movie on the front page
- [ ] User scroll down to see all other movies according to release date
- [ ] User can click on any of the movie to go to their own separate page
- [ ] User can then see all about the movie ratings, about, actors present on each separate movie page

## Bonus features - by blocked

- [🚫] User can create an account
- [🚫] User can create their own watch list
- [🚫] User can review movies

## Useful links and resources

- [MovieDB Api](https://developers.themoviedb.org/3)

## Considerações da Aplicação

> Este arquivo tem como objetivo auxiliar o desenvolvedor acerca de como funciona o fluxo de desenvolvimento desta aplicação

## Estratégia de GitFlow | Entendendo os papéis de cada branch:

- master: Branch de Produção
- develop: Branch para testes das funcionalidades em massa
- feature/SBxxxx: Branch de uma tarefa/funcionalidade específica

### Branches

- Rápido tutorial de como trabalhar com branchs:<br>

Ao puxar uma tarefa para andamento no board, normalmente esta tarefa
vem seguida do nome de identificação: SBxxxx

Para cada tarefa deverá ser criada uma branch para a implementação da
funcionalidade específica no sistema, isso evitará conflitos de versões
de código e irá manter um histórico de onde surgiu tal funcionalidade e
caso ocorra algum problema.

- Certifique que seu código está atualizado com a branch develop realizando
  o pull origin develop (ou checkout para branch develop local e realizar o merge)

- Primeiro passo: Criar a branch

- Comando: git checkout -b "feature/SBxxxx" onde xxxx é o número da tarefa/funcionalidade específica

- Verificar se há alterações para serem comitadas ou não com **git status**
- Segundo passo: git push -u origin feature/SBxxxx para mandar a branch ao repositório remoto

### Commits

Padronização de commit - commit em cada alteração (mesmo que pequenas)

Exemplo de commit [SB0001]: Regras de negócio da API de login.

## Código

Documentação com JSDoc

/\*_ Exemplo básico de um comentário em JSDoc _/

    /*
     * Classe que processa as regras negociais referentes ao evento
     * Conforme SBxxxx.
     * @author Luiz Fernando Thomaz
     */

## Instação

```
npm install
```

ou

```
yarn
```

## Iniciando a Aplicação

Para iniciar a aplicação na sua máquina execute um dos seguintes comandos:

```
npm run dev
```

ou

```
yarn dev
```

```
|-- app
|-- shared
|-- repository
  |-- [+] services
  |-- [+] models
  |-- [/] mocks
|-- core or pages
  |-- [+] home
  |-- [+] header
  |-- [/] login
  |-- [/] register
|-- components
  |-- [+] input
  |-- [+] button
  |-- [+] toast (message success, warn or error)
|-- utils
  |-- [+] validationErrors
```
