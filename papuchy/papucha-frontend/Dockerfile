FROM node:18

WORKDIR /usr/src/bird-app



COPY package*.json ./

RUN npm install


COPY . .

EXPOSE 8081 19001 19001 19006


CMD ["npx", "expo", "start"]