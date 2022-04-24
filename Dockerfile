FROM nginx:1.17
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY www /usr/share/nginx/html
EXPOSE 80
