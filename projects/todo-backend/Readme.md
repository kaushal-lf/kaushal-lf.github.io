# Node.js Express Tasks Backend

This is a simple Tasks backend application built using Node.js and Express. It provides RESTful API endpoints for managing Tasks.

### Installation

`docker compose up`

### Confguration

```bash
SERVER_PORT=8000
ACCESS_TOKEN_SECRET='access_token_secret'
REFRESH_TOKEN_SECRET='refresh_token_secret'
```

### API Endpoints

Get all Tasks

```bash
GET /tasks
```

Create a Task

```bash
POST /tasks
```

Edit a Task

```bash
PUT /tasks/:id
```

Delete a Task

```bash
DELETE /task/:id
```

Create a user

```bash
POST /signup
```

Login a user

```bash
POST /login
```

Get a new refresh Token

```bash
GET /refresh
```
