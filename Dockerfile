FROM node:13.8
WORKDIR /usr/src/app
EXPOSE 3000

COPY package.json package.json
RUN npm install

COPY . .

RUN npm run build

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
