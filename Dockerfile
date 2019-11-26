FROM node:13

EXPOSE 9000

WORKDIR /app

COPY package.json /app
RUN npm install

COPY . /app

RUN npm run build

CMD ["npm", "run", "serve"]
