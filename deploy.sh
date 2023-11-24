#!/bin/bash

if docker inspect mon-container &> /dev/null ; then
  docker stop mon-container
  docker rm mon-container
fi

docker pull ymistercap/mon-image-ci-cd:latest

docker run -d --name mon-container -p 8080:8080 ymistercap/mon-image-ci-cd:latest
