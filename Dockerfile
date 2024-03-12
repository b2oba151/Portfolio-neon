# image Node.js comme base
FROM node:20

#  répertoire de travail dans le conteneur
WORKDIR /app

# Copie les fichiers du projet dans le conteneur
COPY . .

# Install les dépendances
RUN npm install

# Expose le port utilisé par Vite
EXPOSE 8080

# Commande pour démarrer l application Vite
CMD ["npm", "run", "dev"]


# docker build -t nom-de-l-image .

# docker run -p 3000:3000 nom-de-l-image
