FROM node:18-alpine 

WORKDIR /app

COPY package.json package-lock.json index.js router.js ./

RUN npm install

CMD ["node", "index.js"]

EXPOSE 8000