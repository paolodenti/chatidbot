FROM node:15.11.0-alpine3.10

WORKDIR /usr/chatidbot
COPY ./package.json  ./
COPY ./package-lock.json  ./
RUN npm install

COPY ./index.js  ./.

CMD ["npm", "start"]
