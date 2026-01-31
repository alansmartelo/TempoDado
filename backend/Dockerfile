FROM eclipse-temurin:25-jdk-alpine
WORKDIR /app
COPY . .
RUN chmod +x mvnw
CMD ["./mvnw", "spring-boot:run"]