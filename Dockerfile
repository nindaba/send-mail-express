FROM nodejs:14.17.6
COPY . .
WORKDIR ./
EXPOSE 3000
CMD npm start