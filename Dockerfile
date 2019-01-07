FROM node:8.12

WORKDIR /app
COPY ./ /app/
RUN yarn install && yarn run build

ENV NODE_ENV=production

ENTRYPOINT [ "node","dist/index.js" ]