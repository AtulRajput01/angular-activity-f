# Stage 1: Build the production assets
FROM nginx:alpine AS build

# Set working directory
WORKDIR /usr/share/nginx/html

# Copy the built Angular app
COPY . .

# Stage 2: Serve the Angular application using Nginx
FROM nginx:alpine

# Copy the built application from the previous stage
COPY --from=build /usr/share/nginx/html /usr/share/nginx/html

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

