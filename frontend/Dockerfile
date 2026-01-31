# Estágio de desenvolvimento
FROM node:18-alpine

# Define onde o código vai morar dentro do container
WORKDIR /app

# Copia os manifestos de dependências primeiro
COPY package*.json ./

# Instala as ferramentas de suporte que você mencionou
RUN npm install

# Copia o restante do código (as pastas src/dominio, etc)
COPY . .

# O React roda na porta 3000 por padrão
EXPOSE 3000

# Dá a ignição no motor do React
CMD ["npm", "start"]