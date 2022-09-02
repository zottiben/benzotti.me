FROM node:18-alpine3.15

ENV PORT 80

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
RUN yarn

COPY . /usr/src/app

RUN yarn build
EXPOSE 80

CMD "yarn" "dev"