# eCommerce Server Application with NodeJs

 1. Clone this
 
 2. cd <dir>
  
 3. npm start
 
 
 # dockerisation with both client an server apps
 
 
 Prereq:
 docker should be installed
 
 Steps:
 
 ### Building docker Image
 ```
 docker build --no-cache -t ecommserver .
 ```
 
 Output like this 
 
 ```
 Sending build context to Docker daemon  161.3kB
Step 1/7 : FROM node:10
 ---> e45bc9197ec9
Step 2/7 : WORKDIR /usr/src/app
Removing intermediate container 1bd0e88f138b
 ---> a1d7c7296566
Step 3/7 : COPY package*.json ./
 ---> 2ba46147ad6c
Step 4/7 : RUN npm install
 ---> Running in 232546a265ae
added 55 packages from 38 contributors and audited 164 packages in 2.377s
found 0 vulnerabilities

Removing intermediate container 232546a265ae
 ---> 1784796c48bd
Step 5/7 : COPY . .
 ---> dd6db45b7919
Step 6/7 : EXPOSE 3000
 ---> Running in 561646de3f1a
Removing intermediate container 561646de3f1a
 ---> 24750cec19b7
Step 7/7 : CMD [ "npm", "start" ]
 ---> Running in 7457dccf400d
Removing intermediate container 7457dccf400d
 ---> 18ee7d901e34
Successfully built 18ee7d901e34
Successfully tagged ecommserver:latest
```

> Verify whether Image have been created like this 
```

[ram@localhost eCommServer]$ docker images
REPOSITORY                       TAG                  IMAGE ID            CREATED             SIZE
ecommserver                      latest               18ee7d901e34        9 seconds ago       906MB

```
 
 
 ### Building docker container
 ```
 docker run -p 3000:3000 -d -it --name ecomm-container  ecommserver
 ```
 
 > Verify whether docker container build succesfully 
 
 ```
$ docker ps
CONTAINER ID        IMAGE                                               COMMAND                  CREATED             STATUS              PORTS                                            NAMES
f41141fd9eaf        ecommserver                                         "docker-entrypoint.s…"   4 seconds ago       Up 3 seconds        0.0.0.0:3000->3000/tcp                           ecomm-container

 ```
 #### Validation 
 
 Just verify following API from your postman/ Bash shell
 
 ```
 curl -X GET \
  http://<host>:3000/v1/categories-items \
  -H 'cache-control: no-cache' \
  -H 'postman-token: 4182660f-ab1d-3021-6103-e87a8f341da7'
  
 ```
 
### How can I pull image from public docker hub

docker pull <dockerrresgisty>:eCommAppImag
 
docker run -dt -p 3000:3000 -p 4200:4200 -v /data:/data eCommAppImag eCommAppImag-container
 
 
## Open broswer

http://localhost:4200/



### Sample server REST commands

curl -X POST \
  http://localhost:3000/v1/categories-items/ \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'email: sds' \
  -H 'first_name: sdd' \
  -H 'last_name: sdsd' \
  -H 'password: sdsd' \
  -H 'postman-token: efd4edf9-e5ca-5f9e-168e-a946a3e49002' \
  -H 'zipcode: sdsd' \
  -d '{
 "guid": "1212",
        "first_name": "Anjj",
        "last_name": "ssd!",
        "email": "ram@email.com",
        "zipcode": "12345",
        "password": "Anji1234"
}'



curl -X POST \
  http://localhost:3000/v1/categories-items/ \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'email: sds' \
  -H 'first_name: sdd' \
  -H 'last_name: sdsd' \
  -H 'password: sdsd' \
  -H 'postman-token: b2f2a9df-508b-a39f-6765-3aad92fdf253' \
  -H 'zipcode: sdsd' \
  -d '{
 "guid": "1212",
        "first_name": "John",
        "last_name": "Swigger!",
        "email": "john.swi@email.com",
        "zipcode": "443222",
        "password": "TestP@ssw0rd"
}'
