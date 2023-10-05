Docker building:
cd authenticator
docker build . -t authenticator
docker run -p 8080:8080 -it authenticator