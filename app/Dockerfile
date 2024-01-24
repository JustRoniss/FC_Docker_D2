FROM node:18.15.0-bullseye

WORKDIR /usr/src/app

#Copiando tudo da pasta atual(onde está sendo feito o build da imagem) para a pasta atual do container(que no caso é a pasta do WORKDIR)
COPY . .

RUN npm install

ENV DOCKERIZE_VERSION v0.7.0

RUN apt-get update 

RUN apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

EXPOSE 3000

CMD ["node", "index.js"]