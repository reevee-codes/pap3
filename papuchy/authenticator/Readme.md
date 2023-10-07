Docker building:
cd authenticator
docker build . -t authenticator
docker run -p 8085:8085 -it authenticator