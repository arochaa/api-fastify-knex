FROM node
#Criando diretório do app
WORKDIR /usr/src/app
#Copiando o arquivo da nossa maquina para dentro do Container no diretório informado acima
COPY package.json .
#Atualizando repositório apt
RUN apt-get clean && apt-get update
#Instalando Apps
RUN apt-get install htop nano -y
#Instalando pacotes da aplicação setados no packege.json
RUN npm i
#Copiando os arquivos da aplicação para dentro do container no diretório criado acima
COPY . .
#Autor
LABEL author="Anderson Rocha"
#Descrição da imagem
LABEL description="Image create for app NodeJs"

EXPOSE 3001

CMD ["node", "src/server.js"]