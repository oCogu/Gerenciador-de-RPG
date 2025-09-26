# Gerenciador de RPG

Um sistema backend para gerenciamento de RPG, com autenticação de usuários, perfis e sessões seguras usando JWT e cookies.

## Tecnologias

- Node.js
- Express
- MongoDB / Mongoose
- bcrypt (hash de senhas)
- JWT (autenticação)
- cookie-parser (cookies httpOnly)
- CORS

## Funcionalidades

- Registro de usuários com validação de e-mail e senha
- Login com cookies seguros (`httpOnly`)
- Logout (limpeza de cookie)
- Middleware de autenticação para rotas protegidas
- Gerenciamento de perfil:
  - Atualizar nome (`nameTag`)
  - Atualizar e-mail
  - Atualizar senha com validação
  - Consultar dados do usuário

## Estrutura do projeto
