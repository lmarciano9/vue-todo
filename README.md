# Minhas Tarefas

Aplicação SPA de tarefas com Vue.js e Buefy. Disponível no github pages em https://lmarciano9.github.io/vue-todo.

## Características

* Utilização de componentes Buefy
* Vue-multilanguage para internacionalização
* Persistência de dados via LocalStorage
* Utilização de Vuex para gerenciamento de estado

### Páginas disponíveis

* `Login.vue` (/login): Página de login. Hardcoded admin/admin
* `Signup.vue` (/signup): Página de cadastro, somente o formulário
* `TarefaCreate.vue` (/task/:id): Formulário de criação de uma nova tarefa
* `TarefaList.vue`(/tasks): Listagem e filtros de tarefas

## Comandos

Comandos disponívels para utilização do projeto
#### Execução local

`npm run serve`: Executa o servidor de desenvolvimento com hot-reload, disponível em `http://localhost:8080/`.

#### Execução de testes unitários

`npm run test:unit`

#### Build de produção

`npm run build`: Arquivos disponíveis em `dist`.
