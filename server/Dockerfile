FROM node:12.10.0-alpine
WORKDIR /code
COPY ./ /code/
RUN rm -Rf dist node_modules
RUN npm install
RUN npm run build