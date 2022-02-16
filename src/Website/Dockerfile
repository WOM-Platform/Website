# BUILD step

FROM node:17.5 as build

WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@13.2.3

COPY . /app

# Build
RUN ng build --output-path=/app/dist

# DISTRIBUTE step

FROM nginx:1.21-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./ng.conf /etc/nginx/conf.d/
RUN rm /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
