FROM node:18-alpine3.15

ENV PORT 80

WORKDIR /benzotti-deploy
COPY . /benzotti-deploy

RUN yarn
RUN yarn build

EXPOSE 80

CMD ["yarn", "dev"]