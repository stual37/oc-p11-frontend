FROM node:17-alpine as builder
WORKDIR /frontend
COPY public/ frontend/public
COPY src/ /frontend/src
COPY package.json /frontend/
COPY yarn*.lock /frontend/
RUN npm install

RUN pnm run build
CMD ["npm", "start"]

#Stage 2
FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]