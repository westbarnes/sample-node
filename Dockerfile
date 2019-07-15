FROM alpine:latest

WORKDIR /app
COPY . .

RUN apk add --update --no-cache nodejs nodejs-npm && npm install

EXPOSE 8080
CMD ["node", "server.js"]