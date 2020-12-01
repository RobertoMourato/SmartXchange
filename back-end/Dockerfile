FROM node:12-alpine

WORKDIR /app/backend

# Install dependencies
COPY package.json /app/backend/

RUN npm install 
 
# Add source code
COPY . /app/backend

EXPOSE 5000

CMD ["npm", "start"]