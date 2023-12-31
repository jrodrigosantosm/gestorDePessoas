# Projeto MVC de Gestão de Pessoas para Passeios Turísticos 

## Visão Geral

Este é um projeto de sistema de gestão de pessoas para passeios turísticos, desenvolvido usando uma arquitetura Model-View-Controller (MVC). O projeto utiliza o framework Laravel para o back-end e Angular para o front-end.

## Funcionalidades Principais

### Cadastro Turístico:

Registra informações detalhadas sobre os turistas, incluindo nome, contato, e preferências de passeios.
### Gestão de Passeios:

Permite aos administradores criar, editar e excluir passeios turísticos.
Associa turistas a passeios específicos.

### Marcação de Passeios:

Permite aos guias marcar a presença dos turistas nos passeios.
Registra informações sobre o andamento do passeio e feedback dos turistas.

### Relatórios e Estatísticas:

Gera relatórios sobre a participação em passeios, preferências dos turistas e estatísticas relevantes.

## Tecnologias Utilizadas
Back-end (Laravel)
Linguagem: PHP
Framework: Laravel
Banco de Dados: MySQL
Autenticação: Laravel Passport para autenticação de API
Front-end (Angular)
Linguagem: TypeScript
Framework: Angular
Gerenciador de Pacotes: npm
Estilo: Bootstrap ou Angular Material para uma experiência de usuário agradável
Configuração do Ambiente de Desenvolvimento
Requisitos
PHP >= 7.3
Composer
Node.js
npm
MySQL
Laravel CLI
Angular CLI
Configuração do Back-end (Laravel)
Clone o repositório:

bash
Copy code
`git clone https://github.com/jrodrigosantosm/gestorDePessoas.git`

Instale as dependências do Composer:
bash
Copy code
cd seu-repositorio/backend
`composer install`

Copie o arquivo .env.example para .env e configure o banco de dados e outras variáveis de ambiente.

Gere a chave de aplicação:
bash
Copy code
`php artisan key:generate`

Execute as migrações do banco de dados:
bash
Copy code
`php artisan migrate`

Instale e configure o Laravel Passport para autenticação de API:
bash
Copy code
`php artisan passport:install`

Inicie o servidor:
bash
Copy code
`php artisan serve`
Configuração do Front-end (Angular)

Navegue até o diretório do front-end:

bash
Copy code
cd seu-repositorio/frontend
Instale as dependências do npm:
bash
Copy code
`npm install`

Inicie o servidor de desenvolvimento:
bash
Copy code
`ng serve`

Acesse o aplicativo no navegador: http://localhost:4200

Contribuição
Sinta-se à vontade para contribuir para o desenvolvimento deste projeto. Abra problemas (issues) para relatar bugs ou sugerir novas funcionalidades. Pull requests são bem-vindos!

Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.