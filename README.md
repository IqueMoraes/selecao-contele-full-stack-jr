# API para seleção de vaga Full Stack Jr

Aplicação desenvolvida para cadastro e manutenção de usuários com dados de email e senha.
Os dados são validados e a senha é criptografada e protegida nos retornos.

O código foi desenvolvido em TypeScript com o framework express usando TypeORM para conectar com o banco de dados Postgres.

Para acessar as estruturas e exemplos de requisição, com a aplicação rodando basta acessar o endereço http://localhost:3000/api/documentation .


## Rodando localmente em modo de desenvolvimento

Para rodar a aplicação localmente é preciso configurar no arquivo .env a variável "NODE_ENV=development".

Configurar também no arquivo .env o nome do banco de dados que deseja guardar os usuários(em POSTGRES_DB).

Configurar o nome do usuário que tem acesso ao Postgres local(em POSTGRES_LOCAL_USER).

Configurar a senha do usuário identificado (em POSTGRES_PASSWORD).

Exemplo de variáveis se encontram em .env.example .

Na raiz da aplicação rodar o comando "yarn" para instalar as dependências necessárias.

E então rodar o comando "yarn dev" para ter a aplicação funcionando em servidor local na porta 3000.

Caso queira mudar a porta de conexão, basta alterá-la em .env na variável PORT.

## Rodando com Docker

Rodar o comando "sudo docker-compose up", dentro do diretório que se encontra o arquivo "docker-compose.yml".

*Lembre-se de checar se as variáveis do arquivo "docker-compose.yml" estão compatíveis com suas configurações.




