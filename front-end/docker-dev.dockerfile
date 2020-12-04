# Stage 1
FROM node:latest as build-step

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli@latest

COPY . .

EXPOSE 4200
# start app
CMD ["ng",  "serve", "--host", "0.0.0.0"]
#CMD ["ng",  "serve"]