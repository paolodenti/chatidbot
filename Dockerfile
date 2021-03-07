FROM node:current-alpine3.13

WORKDIR /usr/chatidbot
COPY ./package.json  ./
COPY ./package-lock.json  ./
RUN npm install

COPY ./index.js  ./.

CMD ["npm", "start"]
