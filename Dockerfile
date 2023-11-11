
# Installation stage
FROM node:19-alpine AS install

WORKDIR /frontend

COPY package.json ./
RUN npm install


# Development stage
FROM install AS dev

WORKDIR /frontend

COPY src/ ./src
COPY public/ ./public

ARG FRONTEND_PORT
ENV PORT=$FRONTEND_PORT

ENTRYPOINT [ "sh", "-c", "npm run start" ]


# Build stage
FROM install AS build

WORKDIR /frontend

COPY src/ ./src
COPY public/ ./public

RUN npm run build


# Production run stage
FROM node:19-alpine AS prod

WORKDIR /frontend

RUN npm install -g http-server

COPY --from=build /frontend/build /frontend/

ARG FRONTEND_PORT
ENV FRONTEND_PORT=$FRONTEND_PORT

ENTRYPOINT [ "sh", "-c", "http-server ./ -p $FRONTEND_PORT" ]
