FROM maven:3.8.4-openjdk-11-slim
WORKDIR /usr/src/eureka-service

COPY . .

ENV HOME=/usr/src/eureka-service

ADD pom.xml $HOME
RUN ["/usr/local/bin/mvn-entrypoint.sh", "mvn", "verify", "clean", "--fail-never"]
ADD . $HOME
RUN ["mvn", "package"]


EXPOSE 8761

CMD ["java", "-jar", "./target/service-registration-and-discovery-service-0.0.1-SNAPSHOT.jar"]