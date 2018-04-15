#!/bin/bash

set -u

apt-get update

apt-get install netcat -y

npm install

until nc -z -v -w30 db 5430
do
  echo "Waiting for db to start..."
  sleep 5
done

#nodemon app.js

# Uncomment this to run dev container without nodemon
tail -f /dev/null
