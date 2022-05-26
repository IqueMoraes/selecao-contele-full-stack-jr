FROM node:16

WORKDIR /src/app

COPY [ "package.json", "yarn.lock" ] .

RUN yarn

COPY . .

CMD [ "yarn", "dev" ]
