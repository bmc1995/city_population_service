FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV APP_PORT=5555
CMD ["npm", "start"]

# EXPOSE $APP_PORT