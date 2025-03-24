# BUILD step
FROM node:22.13.1 AS build

# Import environment variables from build args

ARG ARG_GOOGLE_MAPS_API
ENV GOOGLE_MAPS_API=$ARG_GOOGLE_MAPS_API
RUN echo "Argument ${ARG_GOOGLE_MAPS_API} => ${GOOGLE_MAPS_API}"

ARG ARG_SENTRY_DSN
ENV SENTRY_DSN=$ARG_SENTRY_DSN
RUN echo "Argument ${ARG_SENTRY_DSN} => ${SENTRY_DSN}"

WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH=/app/node_modules/.bin:$PATH

# Dependencies
COPY package.json /app/package.json
RUN npm install -g npm@10.9.0
RUN npm install -g @angular/cli@19.1.4
RUN npm install

COPY . /app

RUN ./process_apikeys.sh

# Build
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN ng build --output-path=/app/dist --configuration=production

# DISTRIBUTE step
FROM nginx:1.27-alpine
COPY --from=build /app/dist/browser /usr/share/nginx/html
COPY ./ng.conf /etc/nginx/conf.d/
RUN rm /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
