FROM nginx:latest
# COPY ./index.html /usr/share/nginx/html/index.html
COPY ./api.json /usr/share/nginx/json/api.json
COPY ./build /usr/share/nginx/html/
COPY ./default.conf /etc/nginx/conf.d/default.conf

CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'