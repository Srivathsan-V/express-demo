# Node.js Express API

A simple Node.js Express API that returns a hello world message from environment variables.

## Prerequisites

- Node.js 14.x or later
- npm (comes with Node.js)
- Docker (optional, for containerization)

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy the environment template:
   ```bash
   cp .env.template .env
   ```
4. Edit the `.env` file to customize the message if needed

## Running the Application

### Development

```bash
npm start
```

The API will be available at `http://localhost:3000/api/hello`

### Using Docker

1. Build the Docker image:
   ```bash
   docker build -t node-express-app .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 --env-file .env node-express-app
   ```

## API Endpoints

- `GET /api/hello` - Returns a hello world message from environment variables

## Environment Variables

- `PORT` - The port the server will listen on (default: 3000)
- `HELLO_MESSAGE` - The message to return in the API response (default: 'Hello, World!')
