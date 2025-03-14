# Religion API

## Overview
The Religion API is a backend application designed to manage religions and castes. It provides functionalities to add, retrieve, update, and delete religions and their associated castes. This API is built using Express and MongoDB, and it follows a RESTful structure for easy integration.

## Features
- **Religion Management**: Add, retrieve, update, and delete religions.
- **Caste Management**: Add, retrieve, update, and delete castes under specific religions.
- **Data Validation**: Uses `express-validator` for input validation.
- **Database**: MongoDB is used for storing religions and castes.
- **CORS Enabled**: Allows cross-origin requests via `cors` middleware.
- **Environment Configuration**: Uses `dotenv` for managing environment variables.

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB**
- **Express-Validator**
- **Nodemon** (for development)

## Installation
1. Clone the repository:
```bash
    git clone <repository_url>
```

2. Navigate to the project directory:
```bash
    cd religion
```

3. Install dependencies:
```bash
    npm install
```

4. Create a `.env` file and add your MongoDB connection string:
```env
    MONGO_URI=<your_mongo_uri>
```

5. Run the server in development mode:
```bash
    npm run dev
```

## API Endpoints
### Base URL: `https://religioncaste-n2zr.vercel.app`

### Religion Endpoints
- **Add Religion:** `POST https://religioncaste-n2zr.vercel.app/religions`
    ```json
    {
      "name": "Thunder Crush",
      "description": "Grass Flaim description",
      "isActive": true
    }
    ```
- **Get All Religions:** `GET https://religioncaste-n2zr.vercel.app/religions`
- **Update Religion:** `PATCH https://religioncaste-n2zr.vercel.app/religions?id=<religion_id>`
    ```json
    {
      "name": "Thunder Leaf"
    }
    ```
- **Delete Religion:** `DELETE https://religioncaste-n2zr.vercel.app/religions?id=<religion_id>`

### Caste Endpoints
- **Add Caste:** `POST https://religioncaste-n2zr.vercel.app/casts`
    ```json
    {
      "name": "New Caste",
      "description": "Air feri description",
      "religionId": "67d43a22d74501244a5ca273"
    }
    ```
- **Get All Castes:** `GET https://religioncaste-n2zr.vercel.app/casts`
- **Get Castes By Religion:** `GET https://religioncaste-n2zr.vercel.app/casts?religionId=<religion_id>`
- **Update Caste:** `PATCH https://religioncaste-n2zr.vercel.app/casts?id=<caste_id>`
    ```json
    {
      "name": "updated Name"
    }
    ```
- **Delete Caste:** `DELETE https://religioncaste-n2zr.vercel.app/casts?id=<caste_id>`
### Base URL: `https://religioncaste-n2zr.vercel.app`

### Religion Endpoints
- **Add Religion:** `POST /religions`
    ```json
    {
      "name": "Thunder Crush",
      "description": "Grass Flaim description",
      "isActive": true
    }
    ```
- **Get All Religions:** `GET /religions`
- **Update Religion:** `PATCH /religions?id=<religion_id>`
    ```json
    {
      "name": "Thunder Leaf"
    }
    ```
- **Delete Religion:** `DELETE /religions?id=<religion_id>`

### Caste Endpoints
- **Add Caste:** `POST /casts`
    ```json
    {
      "name": "New Caste",
      "description": "Air feri description",
      "religionId": "67d43a22d74501244a5ca273"
    }
    ```
- **Get All Castes:** `GET /casts`
- **Get Castes By Religion:** `GET /casts?religionId=<religion_id>`
- **Update Caste:** `PATCH /casts?id=<caste_id>`
    ```json
    {
      "name": "updated Name"
    }
    ```
- **Delete Caste:** `DELETE /casts?id=<caste_id>`

## Dependencies
```json
{
  "body-parser": "^1.20.3",
  "cors": "^2.8.5",
  "dotenv": "^16.4.7",
  "express": "^4.21.2",
  "express-validator": "^7.2.1",
  "mongoose": "^8.12.1"
}
```

## Dev Dependencies
```json
{
  "nodemon": "^3.1.9"
}
```

## Postman Collection
The Postman collection for testing the API can be accessed via this link:
[Religion API Collection](https://lunar-zodiac-41401.postman.co/workspace/Team-Workspace~65a23fa5-ff62-4503-823b-dc87393c186d/collection/22980443-0f88203c-f169-4c0d-af55-a9fba573738d?action=share&source=collection_link&creator=22980443)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

