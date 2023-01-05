FROM node:16 
# Create src directory 
WORKDIR /app
COPY package.json .

RUN npm install 

# adding bundle file to working dir
COPY . .


EXPOSE 4000 

# start static server
CMD npm run start