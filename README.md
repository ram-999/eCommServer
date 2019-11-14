# Simple Application via AngularJS + Node + Express

 1. Clone this
 
 2. cd <dir>
  
 3. npm start
 
 
 # dockerisation with both client an server apps
 
 
 Prereq:
 docker should be installed
 
 Steps:
 
 Start docker on windows or linux
 
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
        "first_name": "Anjj",
        "last_name": "ssd!",
        "email": "anji@email.com",
        "zipcode": "12345",
        "password": "Anji1234"
}'
