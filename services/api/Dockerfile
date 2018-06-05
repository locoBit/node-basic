FROM node:8.5.0-wheezy

COPY ./api/src /var/lib/app
COPY ./api/src/package.json /var/lib/app
COPY ./api/scripts /home/docker/

WORKDIR /var/lib/app

# RUN chmod -R +x /home/docker/startup.* && npm install

RUN npm install -g nodemon && npm install

EXPOSE 8080

CMD [ "tail", "-f", "/dev/null"]

# ENTRYPOINT ["/home/docker/startup.sh"]
