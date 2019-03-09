# Load node server
FROM node:11

# Change working dir to /app
WORKDIR /app

# Add files from current to /app
COPY package.json /app/package.json

# Install node packages
RUN npm install
# RUN npm install -g http-server

# Start command
# CMD ["http-server", "./build"]

# Add source files
COPY . .

# Run the build
RUN npm start;

# Expose the port
EXPOSE 8080
