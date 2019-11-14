FROM ubuntu:latest

git clone https://github.com/ram-999/eCommServer

cd eCommServer

USER eCommServer

MKDIR eCommServer

COPY /** eCommServer/

CD eCommServer

CMD npm start

git clone https://github.com/ram-999/eCommClient

cd eCommClient

USER eCommClient

MKDIR eCommClient

COPY /** eCommClient/

CD eCommClient

CMD ng serve
