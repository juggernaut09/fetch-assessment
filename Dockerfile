FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Bind to port 3000
EXPOSE 3000

# Command to run the app with nodemon
CMD ["npm", "run", "dev"]
