FROM node:13-alpine as build

WORKDIR /

COPY . .

ENV NODE_ENV=production
RUN npm install --production
RUN npm build

FROM nginx:1.18.0-alpine as final

WORkDIR /
COPY --from=build ./dist /usr/share/ninx/html
