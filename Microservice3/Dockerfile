FROM node
WORKDIR .
COPY packages*.json .
RUN npm cache clean --force
RUN em -rf node_modules
COPY packages.json package-lock.json ./
RUN npm install
COPY . .
CMD node DB.js