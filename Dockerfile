# build environment
FROM node:12.13.0 as builder
RUN mkdir /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
RUN npm install
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm run build:opti

# production environment
FROM nginx:1.13.9-alpine
RUN rm -rf /etc/nginx/conf.d
RUN mkdir -p /etc/nginx/conf.d
COPY ./default.conf /etc/nginx/conf.d/
COPY --from=builder /usr/src/app/dist/ticket-tracker /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
