FROM node:latest

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 80
EXPOSE 443

CMD ["serve", "-s", "build", "-l", "80"]
