# Use Node 20 slim image as base
FROM node:20-slim AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Accept an API base URL at build time (from docker-compose)
ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}

# Produce static files in /app/dist
RUN npm run build

# --- Runtime stage (Nginx) ---
FROM nginx:alpine
# Copy the built assets into Nginx's web root
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
