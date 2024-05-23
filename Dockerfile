FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY index.js router.js ./

FROM node:18-alpine

WORKDIR /app

COPY --from=build /app .

USER node

CMD ["node", "index.js"]

EXPOSE 8000