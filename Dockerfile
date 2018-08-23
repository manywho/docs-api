FROM node:alpine

WORKDIR /usr/src/app

RUN apk --no-cache add git openssh-client \
  && npm install -g redoc-cli

COPY docker-entrypoint.sh /usr/local/bin/
ENTRYPOINT ["docker-entrypoint.sh"]
