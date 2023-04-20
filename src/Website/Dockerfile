# BUILD step
FROM node:18.14 as build

# Import environment variables from build args

ARG ARG_GOOGLE_MAPS_API
ENV GOOGLE_MAPS_API=$ARG_GOOGLE_MAPS_API

ARG ARG_SEND_IN_BLUE_API
ENV SEND_IN_BLUE_API=$ARG_SEND_IN_BLUE_API

WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Dependencies
COPY package.json /app/package.json
RUN npm install -g npm@latest
RUN npm install -g @angular/cli@13.3.10
RUN npm install

COPY . /app

RUN ./process_apikeys.sh

# Build
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN ng build --output-path=/app/dist --configuration=production

# DISTRIBUTE step
FROM nginx:1.23-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./ng.conf /etc/nginx/conf.d/
RUN rm /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
