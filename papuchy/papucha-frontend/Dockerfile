FROM node:18

WORKDIR /usr/src/bird-app



COPY package*.json ./

RUN npm install



COPY . .

EXPOSE 8081



CMD ["npx", "expo", "start"]