FROM node:20 AS build
ARG VITE_BACKEND_URL=https://friendly-robot-rv9w4w5gq9j2594v-3001.app.github.dev/api/v1
WORKDIR /build
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build
FROM nginx AS final
WORKDIR /usr/share/nginx/html
COPY --from=build /build/dist .
