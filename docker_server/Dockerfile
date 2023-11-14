FROM node:20.9.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

RUN npx prisma migrate

RUN npx prisma generate

CMD [ "npm", "run", "dev" ]



