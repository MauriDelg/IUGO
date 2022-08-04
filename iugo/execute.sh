#!/bin/bash

if [[ "$(docker images -q iugo:latest 2> /dev/null)" == "" ]]; then
    docker build -t iugo .
fi

docker run -p 3000:3000 --name iugo -d iugo