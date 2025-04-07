# Stage 1: Build Stage
FROM node:18 AS build 

WORKDIR /reactapp

COPY package*.json ./
RUN npm install

COPY . . 

RUN npm run build

# Stage 2: Production Stage (using Nginx)
FROM nginx:alpine

# Copy the built React app from the build stage
COPY --from=build /reactapp/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]