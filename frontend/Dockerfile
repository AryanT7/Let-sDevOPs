# Use Node 20 slim image as base
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Install serve to run the built application
RUN npm install -g serve

# Expose port 5173
EXPOSE 5173

# Command to run the application in development mode
CMD ["npm", "run", "dev", "--", "--host"]
