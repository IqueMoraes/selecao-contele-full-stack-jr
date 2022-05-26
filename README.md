# API para seleção de vaga Full Stack Jr

Aplicação desenvolvida para cadastro e manutenção de usuários com dados de email e senha.
Os dados são validados e a senha é criptografada e protegida nos retornos.

## Rodando localmente modo desenvolvimento

Para rodar a aplicação localmente é preciso configurar no arquivo .env a variável "NODE_ENV=development".

Configurar também no arquivo .env o nome do banco de dados que deseja guardar os usuários(em POSTGRES_DB).

Configurar o nome do usuário que tem acesso ao Postgres local(em POSTGRES_LOCAL_USER).

Configurar a senha do usuário identificado (em POSTGRES_PASSWORD).

Exemplo de variáveis se encontram em .env.example .

Na raiz da aplicação rodar o comando "yarn" para instalar as dependências necessárias.

E então rodar o comando "yarn dev" para ter a aplicação funcionando em servidor local na porta 3000.

Caso queira mudar a porta de conexão, basta alterá-la em .env na variável PORT.

## Rodando com Docker

Para rodar a aplicação com docker localmente é preciso configurar no arquivo .env a variável "NODE_ENV" com o valor "docker".

Rodar o comando "sudo docker-compose up", dentro do diretório que se encontra o arquivo "docker-compose.yml".

Para rodar no docker, é sugerido que mantenha a variável PORT com o valor '3000', para que não tenha incompatibilidade com a porta configurada no container do docker.



