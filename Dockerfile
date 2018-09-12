FROM node:8-alpine

WORKDIR /usr/src/app

RUN apk --no-cache add git openssh-client

# This is here to "fix" some errors about UID 0, and Node.js people still haven't figured out a real solution
RUN npm config set unsafe-perm true

COPY docker-entrypoint.sh /usr/local/bin/
ENTRYPOINT ["docker-entrypoint.sh"]
