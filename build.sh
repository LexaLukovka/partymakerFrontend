#!/bin/bash
docker-compose down
git reset --hard origin/master
git pull origin master
yarn build
docker-compose build frontend
docker-compose up -d
