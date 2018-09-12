FROM node:8-alpine

WORKDIR /usr/src/app

RUN apk --no-cache add git openssh-client

COPY docker-entrypoint.sh /usr/local/bin/
ENTRYPOINT ["docker-entrypoint.sh"]
