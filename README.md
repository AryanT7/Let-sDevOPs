# Full Stack Web Application

A modern web application scaffold using React (Frontend) and FastAPI (Backend) with Docker support.

## Project Structure

```
.
├── backend/                 # FastAPI backend
│   ├── main.py             # Main application file
│   ├── requirements.txt    # Python dependencies
│   └── Dockerfile         # Backend Docker configuration
├── frontend/               # React frontend
│   ├── src/               # Source files
│   ├── package.json       # Node.js dependencies
│   └── Dockerfile        # Frontend Docker configuration
├── docker-compose.yml     # Docker Compose configuration
└── README.md             # This file
```

## Prerequisites

- Python 3.11+
- Node.js 20+
- Docker and Docker Compose (for containerized setup)

## Local Development Setup

### Backend (FastAPI)

1. Create and activate a virtual environment:
   ```bash
   cd backend
   python -m venv venv
   # On Windows
   .\venv\Scripts\activate
   # On macOS/Linux
   source venv/bin/activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the backend server:
   ```bash
   uvicorn main:app --reload
   ```

The backend will be available at http://localhost:8000

### Frontend (React)

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at http://localhost:5173

## Docker Setup

To run the entire application using Docker:

1. Build and start the containers:
   ```bash
   docker-compose up --build
   ```

2. Access the applications:
   - Frontend: http://localhost:5173
   - Backend: http://localhost:8000
   - API Documentation: http://localhost:8000/docs

To stop the containers:
```bash
docker-compose down
```

## Available Endpoints

### Backend

- `GET /api/hello`: Returns a hello message
- `GET /docs`: OpenAPI documentation (Swagger UI)
- `GET /redoc`: Alternative API documentation (ReDoc)

## Development Notes

- The backend uses CORS to allow requests from the frontend in development mode
- Hot reload is enabled for both frontend and backend in development mode
- Docker volumes are configured to reflect code changes without rebuilding containers

## Next Steps

This scaffold is ready for:
- Adding authentication
- Implementing database integration
- Setting up testing
- Configuring CI/CD pipelines
- Adding AWS deployment configurations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
