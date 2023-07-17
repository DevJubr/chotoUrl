# URL Shortening System

This system for shortening URLs is create using MERN Stack. Users can generate their shortened URLs, edit the long URLs, and manage their URL history.

## Features

- **Entry Page**: This is first page. In this page users can enter a long URL and generate a short URL.
- **Edit Page**: In this page users can edit the long URL or delete a URL.
- **List Page**: Displays the list of created short URLs, allowing users to access the long URLs and the created times of the URL.

## Technologies Used

- React
- Express
- MongoDB

## Usage

1. Clone the repository:

```bash
   git clone https://github.com/jubayerjr203/chotoUrl.git
```

3. Install dependencies:
```bash
cd front-end
npm install
cd back-end
npm install
```
3. Start the development server:
```bash
cd back-end
npm run server
```
3. Access the application in your browser at `http://localhost:3000`.

##Folder Structure:

chotoUrl/
├── back-end/
│   ├── server.js
│   ├── api/
│   │   ├── ...
│   ├── utils/
│   │   ├── ...
│   ├── controller/
│   │   ├── ...
│   ├── models/
│   │   ├── ...
│   ├── routes/
│   │   ├── ...
│   └── ...
├── front-end/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ...
│   ├── hooks/
│   │   ├── ...
│   ├── layout/
│   │   ├── ...
│   ├── pages/
│   │   ├── ...
│   ├── routes/
│   │   ├── ...
│   ├── main.jsx
│   ├── index.html
│   └── ...
├── public/
│   ├── favicon.png
└── ...
