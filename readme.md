## build image and run

docker build -t nxserver .
docker run -it --rm -d -p 8081:80 --name aviasales-nxserver nxserver

## push and release image in heroku from dockerfile

heroku container:push web -a aqueous-brook-12363
heroku container:release web -a aqueous-brook-12363
heroku open -a aqueous-brook-12363
