# base image
FROM node:latest

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package*.json ./
RUN npm install -g @adonisjs/cli nodemon
RUN npm install

COPY . .

# start app
CMD ["npm", "run", "dev"]
