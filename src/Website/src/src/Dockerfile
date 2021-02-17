# BUILD step

FROM node:15.8 as build

WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@11.1.3

COPY ../.. /app

# Build
RUN ng build --output-path=dist

# DISTRIBUTE step

FROM nginx:1.19.6-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
