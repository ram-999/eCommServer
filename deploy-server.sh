docker build --no-cache -t ecomm-server .
docker stop ecomm-server-container
docker rm ecomm-server-container
docker run -p 4200:80 -d -it  --name ecomm-server-container ecomm-server
