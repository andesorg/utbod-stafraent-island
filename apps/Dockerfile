# Base
FROM node:16-alpine3.14 as base

WORKDIR /code

ARG APP_PATH
COPY ${APP_PATH}/package.json ${APP_PATH}/yarn.lock ./

RUN yarn install --frozen-lockfile --prod


# Builder
FROM base as builder

ARG APP_PATH

RUN yarn install --frozen-lockfile

ADD ${APP_PATH}/. .

RUN yarn build


# Runner
FROM base as runner

ENV NODE_ENV=production

COPY --from=builder /code/dist /code

CMD [ "yarn", "start:prod" ]
