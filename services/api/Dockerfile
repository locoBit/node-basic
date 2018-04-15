FROM node:8.5.0-wheezy

COPY ./api/src /var/lib/app
COPY ./api/src/package.json /var/lib/app
COPY ./api/scripts /home/docker/

WORKDIR /var/lib/app

# RUN chmod -R +x /home/docker/startup.* && npm install

RUN yarn global add nodemon && yarn install

EXPOSE 8080

CMD [ "tail", "-f", "/dev/null"]

# ENTRYPOINT ["/home/docker/startup.sh"]
