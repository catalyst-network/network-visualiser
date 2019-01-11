FROM node:8.11-alpine AS Builder
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . /app
RUN npm run build

# Deliver the dist folder with Nginx
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=Builder /app/dist /usr/share/nginx/html
COPY entrypoint.sh /

CMD ["/entrypoint.sh"]