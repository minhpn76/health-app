FROM node:18.4.0-alpine as builder
WORKDIR /app
COPY package.json ./
RUN yarn cache clean
RUN rm -rf node_modules
RUN rm -f yarn.lock
RUN yarn
COPY . ./
RUN yarn build

#ngnix
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
