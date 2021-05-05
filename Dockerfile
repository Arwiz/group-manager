FROM node:14

# Create app directory
WORKDIR user/src/app

COPY package*.json ./

RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "server.js" ]