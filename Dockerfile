FROM node:13.8
WORKDIR /usr/src/app
EXPOSE 3000

COPY package.json package.json
RUN npm install

ARG API
ARG PRIVATE_DNS_API
ENV API=$API
ENV PRIVATE_DNS_API=$PRIVATE_DNS_API

COPY . .

RUN npm run build

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
