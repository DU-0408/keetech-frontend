# ---------- Build stage ----------
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

# ---------- Production stage ----------
FROM nginx:alpine

# Remove default nginx site
RUN rm -rf /usr/share/nginx/html/*

# Copy nginx conf and build output
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
