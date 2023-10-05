FROM maven:3.8.4-openjdk-11-slim
WORKDIR /usr/src/authenticator

COPY . .

ENV HOME=/usr/src/authenticator

ADD pom.xml $HOME
RUN ["/usr/local/bin/mvn-entrypoint.sh", "mvn", "verify", "clean", "--fail-never"]
ADD . $HOME
RUN ["mvn", "package"]


EXPOSE 8080

CMD ["java", "-jar", "./target/authenticator-0.0.1-SNAPSHOT.jar"]