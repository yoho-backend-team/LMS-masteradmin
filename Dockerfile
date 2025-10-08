# Use an official Node.js runtime as base
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose port
EXPOSE 3001

# Run the app
CMD ["node", "app.js"]
