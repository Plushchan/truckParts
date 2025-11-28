FROM node:20

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

RUN npm install -g nodemon

COPY . .

EXPOSE 1234

CMD ["nodemon", "./src/index.js"]