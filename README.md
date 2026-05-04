# Microservices Project

This project is a modular backend architecture consisting of two independent Next.js microservices (`user-service` and `siswa-service`), containerized with Docker Compose.

## Getting Started

First, ensure you have the required environment variables set up. Each service requires its own `.env.local` file with the database connection details (Neon PostgreSQL).

### Running with Docker (Recommended)

The easiest way to run the entire stack is using Docker Compose. Make sure you have Docker Desktop installed and running.

```bash
docker-compose up --build
```

Once the containers are running, you can access the services at:

- **User Service:** [http://localhost:3001](http://localhost:3001)
- **Siswa Service:** [http://localhost:3002](http://localhost:3002)

### Running Manually (Without Docker)

If you prefer to run the services individually without Docker, open two separate terminal windows.

**Terminal 1 (User Service):**
```bash
cd user-service
npm install
npm run dev
```
*(Runs on [http://localhost:3000](http://localhost:3000) by default, or 3001 if configured)*

**Terminal 2 (Siswa Service):**
```bash
cd siswa-service
npm install
npm run dev
```
*(Runs on [http://localhost:3000](http://localhost:3000) by default, or 3002 if configured)*

You can start editing the code in the respective `app/` directories. The pages auto-update as you edit the files.

## Learn More

To learn more about the technologies used in this project, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Docker Documentation](https://docs.docker.com/) - learn how to containerize applications.
- [Neon PostgreSQL](https://neon.tech/docs) - learn about Serverless Postgres.
