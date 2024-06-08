
# Exchange Rate API

This project provides RESTful APIs for exchange rates and currency conversions. The application is built using Node.js and TypeScript, bundled with Webpack, and tested with Jest.

## Installation

After cloning the project, install the necessary dependencies:

```bash
npm install
```

## Development Server

To run the TypeScript files during development:

```bash
npm run dev
```

## Build

To compile the project files to JavaScript:

```bash
npm run build
```

## Run

To run the compiled JavaScript files:

```bash
npm start
```

## Tests

To run the tests with Jest:

```bash
npm test
```

## API Endpoints

### 1. Exchange Rates API

- **Endpoint:** `/api/rates`
- **Method:** `GET`
- **Query Parameters:**
  - `source`: Source currency (e.g., `USD`)
  - `targets`: Target currencies (e.g., `EUR,GBP`)
- **Sample Request:**

```bash
curl -G http://localhost:3000/api/rates --data-urlencode "source=USD" --data-urlencode "targets=EUR,GBP"
```

### 2. Currency Conversion API

- **Endpoint:** `/api/exchange`
- **Method:** `POST`
- **Body:**
  - `amount`: Source currency amount
  - `source`: Source currency (e.g., `USD`)
  - `targets`: Target currencies (e.g., `EUR,GBP`)
- **Sample Request:**

```bash
curl -X POST http://localhost:3000/api/exchange -H "Content-Type: application/json" -d '{"amount": 100, "source": "USD", "targets": ["EUR", "GBP"]}'
```

### 3. Transaction List API

- **Endpoint:** `/api/transactions`
- **Method:** `GET`
- **Query Parameters:**
  - `id`: Transaction ID
  - `startDate`: Start date (e.g., `2024-01-01`)
  - `endDate`: End date (e.g., `2024-12-31`)
- **Sample Request:**

```bash
curl -G http://localhost:3000/api/transactions --data-urlencode "startDate=2024-01-01" --data-urlencode "endDate=2024-12-31"
```
